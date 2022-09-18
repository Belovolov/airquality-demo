function showLegend(mymap) {
  var legend = L.control({ position: 'topleft' });
  // get color depending on population density value
  function getColor(d) {
    return d > 1000
      ? '#800026'
      : d > 500
      ? '#BD0026'
      : d > 200
      ? '#E31A1C'
      : d > 100
      ? '#FC4E2A'
      : d > 50
      ? '#FD8D3C'
      : d > 20
      ? '#FEB24C'
      : d > 10
      ? '#FED976'
      : '#FFEDA0';
  }
  legend.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'info legend tabx');
    /*
		var =	grades = [0, 10, 20, 50, 100, 200, 500, 1000],
			labels = [],
			from, to;
	labels.push('<i id ="hehehehe" style="background:" class="x x"></i>  Chart Example');
		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i>  Chart Example');
		}

		div.innerHTML = labels.join('<br>');
*/
    //div.innerHTML = '<div class="tabx", id = "tabs"> \
    //</div>';
    return div;
  };
  legend.addTo(mymap);
  //	append_new_tab('#hehehehe',"guagua");
  //	append_new_tab('.x.x',"heihei");
  get_all_parameters();
}

function openCity(evt, parameter_type) {
  console.log(parameter_type);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  //document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += ' active';

  get_all_lastest_values_of_ts1h_for_parametername(parameter_type);
}

function get_all_parameters() {
  var url =
    'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&&datasource=1&format=objson&ts_name=*&parametertype_name=*';
  console.log(url);
  d3.json(url, function (data) {
    console.log(data);
    console.log(
      data.map(function (d) {
        return d.station_no;
      })
    );
    console.log(
      (temp = d3
        .set(
          data.map(function (d) {
            return d.parametertype_name;
          })
        )
        .values())
    );
    temp = temp.sort();
    for (var i = 0; i < temp.length; i++) {
      console.log(temp[i]);
      append_new_tab('.tabx', temp[i]);
    }

    console.log(temp);
    return data;
  });
}

function append_new_tab(node, text) {
  var temp = d3.select(node);
  //console.log(node);
  //console.log(temp);
  temp
    .append('button')
    .text(text)
    .attr('class', 'tablinks')
    .attr('id', text)
    .attr('onclick', 'openCity(event, "' + text + '");');
}

function get_all_lastest_values_of_ts1h_for_parametername(parametertype_name) {
  var url =
    'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&&datasource=1&format=objson&ts_name=*1H&parametertype_name=' +
    parametertype_name;
  console.log(url);
  d3.json(url, function (data) {
    for (var key in data) console.log(data[key]);
    var ts_id_list = data.map(function (d) {
      return d.ts_id;
    });
    console.log(ts_id_list.join());
    var url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValueLayer&&datasource=1&format=objson&ts_id=' +
      ts_id_list.join() +
      '&metadata=true&md_returnfields=station_id,parametertype_name,station_name,ts_name,ts_unitsymbol,station_no';
    console.log(url);
    d3.json(url, function (data) {
      //process all the return values;
      //	  var markers = L.markerClusterGroup();
      markers.clearLayers();
      if (heatmapLayer != null) mymap.removeLayer(heatmapLayer);

      var max = d3.max(data, function (d) {
        if (isNaN(d.ts_value)) return 0;
        else return d.ts_value;
      });

      for (var key in data) {
        console.log(key);

        console.log(data[key]);
        console.log(data[key].ts_value);

        if (
          isNaN(data[key].ts_value) ||
          data[key].ts_value == null ||
          data[key].ts_value < 0
        ) {
          console.log(key + ' not a Number');
          data[key].ts_value = 0;
        }
      }
      for (var key in data) {
        if (
          isNaN(data[key].ts_value) ||
          data[key].ts_value == null ||
          data[key].ts_value < 0
        ) {
          console.log(key + ' not a Number');
          data[key].ts_value = 0;
        }
      }

      console.log(max);

      var mydata = { max: max, data: data };
      var mycfg = {
        radius: 0.09,
        maxOpacity: 0.4,
        scaleRadius: true,
        useLocalExtrema: true,
        latField: 'station_latitude',
        lngField: 'station_longitude',
        valueField: 'ts_value',
      };
      //heatmap end
      //	var local_heatmapLayer=new HeatmapOverlay(cfg);
      //heatmap set data
      //		local_heatmapLayer.addTo(mymap);
      //		local_heatmapLayer.setData(testData);

      heatmapLayer = new HeatmapOverlay(mycfg);
      //heatmap set data
      heatmapLayer.addTo(mymap);
      heatmapLayer.setData(mydata);

      for (var key in data) showSite(data[key], max);
    });

    return data;
  });
}
function ShowParameterInfo(site) {
  append_chartwithtimestamp(
    site.ts_id,
    site.timestamp,
    site.parametertype_name,
    site.ts_name,
    1
  );
}

function showSite(site, max) {
  var latitude = -36.970614;
  var longitude = 174.837432;
  latitude = site.station_latitude;
  longitude = site.station_longitude;
  console.log(site);
  var parseDate = d3.timeParse('%Y-%m-%dT%H:%M:%S.%L%Z');
  var msg =
    '<b>Site Name:</b> ' +
    site.station_name +
    '<a href="./station.html?station_id=' +
    site.station_id +
    '&timestamp=' +
    site.timestamp +
    '&station_name=' +
    site.station_name +
    '">  More data from this station </a> ' +
    '<br> <b>Site NO.:  </b>' +
    site.station_no +
    '<br>Here is <b>ONE MONTH</b> range of data backward from <b> ' +
    parseDate(site.timestamp) +
    '</b>' +
    '<section id="chartstable">' +
    ' <svg   width="870" height="1" ></svg>' +
    '</section>';

  var html_info =
    ' <svg id="g' +
    site.station_id +
    '5" width="100%" height="100%" onclick="' +
    site.station_id +
    '5".update(NewValue());"></svg>';
  var myIcon;
  myIcon = L.divIcon({
    className: '.my-label',
    iconSize: [50, 50],
    html: html_info,
  });
  var marker;
  if (1)
    marker = L.marker([site.station_latitude, site.station_longitude], {
      title: site.station_name,
      icon: myIcon,
    });
  else {
    marker = L.marker([site.station_latitude, site.station_longitude], {
      title: site.station_name /*,icon: myIcon*/,
    });
  }
  //  marker.bindTooltip("My Label", {/*permanent: true, className: "my-label", offset: [0, 0]*/ });
  marker.bindPopup(msg, { maxWidth: 870, minWidth: 300 });
  markers.addLayer(marker);
  mymap.addLayer(markers);
  // marker.addTo(mymap);

  var config5 = liquidFillGaugeDefaultSettings();

  var currenttime = new Date();

  var days = d3.timeDay.count(parseDate(site.timestamp), currenttime);

  if (days > 2) {
    config5.waveColor = 'orange';
    config5.circleColor = 'orange';
  } else {
    config5.circleColor = 'green';
    config5.waveColor = 'green';
  }
  config5.textColor = '#FF0000';
  config5.waveTextColor = '#FF0000';
  config5.waveAnimateTime = 2000;
  config5.waveHeight = 0.6;
  config5.waveAnimate = true;
  config5.waveCount = 1;
  config5.waveOffset = 0.25;
  config5.minValue = 0;
  config5.maxValue = max == 0 ? 1 : max;
  config5.displayPercent = false;
  if (isNaN(site.ts_value)) site.ts_value = 0;
  var gauge6 = loadLiquidFillGauge(
    'g' + site.station_id + '5',
    /*site.parametertype_name*/ '',
    site.ts_value,
    config5
  );

  marker.on('click', function (e) {
    this.openPopup();
    ShowParameterInfo(site);
    //   		 		ShowStationInfo(site.station_id,1, "CO", color_scheme_CO);
  });
  /*
        var reddot = L.circle([latitude,longitude], 50, {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5
         }).bindPopup(msg,  {maxWidth:700, minWidth:300} );
				 markers.addLayer(reddot);
				 mymap.addLayer(markers);
*/
}
