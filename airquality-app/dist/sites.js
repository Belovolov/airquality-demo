var sites_list = [
  {
    name: 'Henderson',
    id: 'Henderson',
    Address: 'Henderson Intermediate School 70 Lincoln Rd Henderson, Waitakere',
    Monitoring_commenced: '15 December 1993',
    AS2922_compliant: 'No; 12m tree ~5m to SW, 13m tree ~10m to N',
    Site_description_and_area_characteristics:
      'Air conditioned shed at the front of the Henderson Intermediate School grounds, approximately 10m from the western side of Lincoln Rd. Henderson commercial district <1km N;  houses in area 1960s onward; approximately 50% with chimneys.',
    Distance_from_road_and_other_major_sources:
      '10 m E to Lincoln Rd (arterial road, aligned N-S).',
    Pollutants_Monitored:
      'NOx - API 200E Gas Analyser - Nitrogen Oxides.  Calibrator. -ECOTECH GASCAL 1100  PM10 - THERMO FH62C14 – Beta Attenuation Monitor THERMO FH62-C14 THERMO 2000H – Partisol.',
    Meteorological_parameters:
      'Wind speed Wind direction  Ambient temperature Relative humidity  Solar radiation',
    NZMG: [2655570, 6480255],
    Elevation: 29.9,
    NZTM: [1745140, 5918533],
    google_position: undefined,
    image: 'Henderson.png',
    misc: 'Inlet height (m) 3.0 gas 3.5 Particulate',
  },
  {
    name: 'Glen Eden',
    id: 'Gleneden',
    Address:
      'Adjacent to 50 and 52 Meadowvale Rise Ceramco Park Glen Eden, Waitakere',
    Monitoring_commenced: '1 December 2005',
    AS2922_compliant: 'Yes',
    Site_description_and_area_characteristics:
      'Air conditioned shed at SE corner of park, 5m from house and 20m from road. Most houses in the area 1980s and newer (medium-sized sections, few chimneys), but Glen Eden to the N has a lot of older houses (1960s); larger sections, approx 75% with chimneys.',
    Distance_from_road_and_other_major_sources:
      '20m S to Meadowvale Rise (residential street SW -NE).',
    Pollutants_Monitored:
      'NOx - API 200E Gas Analyser PM10 - THERMO FH62C14 Beta Attenuation Monitor',
    Meteorological_parameters:
      'Wind speed,  Wind direction Ambient temperature Relative humidity Solar radiation Rainfall',
    NZMG: [2657563, 6474207],
    Elevation: 40,
    NZTM: [1747144, 5912490],
    image: 'GlenEden.png',
    misc: 'Inlet height (m) 1.8 gas       4.0 Particulate',
  },
  {
    name: 'Pakuranga (Bells reserve)',
    id: 'Pakuranga',
    Address: 'Bell Reserve Adjacent to 262A Pakuranga Rd Pakuranga, Manukau',
    Monitoring_commenced: '26 May 1998',
    AS2922_compliant: 'Yes',
    Site_description_and_area_characteristics:
      'Air conditioned shed at the SW corner of Bell Reserve about 7.5m from Pakuranga Rd.  Houses in the area are of mixed age - from 1960s to <5 years old, mostly on medium  sized sites. About 50% of houses have chimneys.',
    Distance_from_road_and_other_major_sources:
      '7.5m SE to Pakuranga Highway  (arterial road, aligned SW-NE) other large trees more than 10m N  of inlet - not in sampling path.',
    Pollutants_Monitored: 'PM10 - THERMO FH62C14 – Beta Attenuation Monitor',
    Meteorological_parameters:
      'Wind speed,  Wind direction,  Ambient temperature, Relative humidity, Solar radiation,  Rainfall',
    NZMG: [2678830, 6475619],
    Elevation: 16,
    NZTM: [1768407, 5913944],
    image: 'Pakuranga.png',
    misc: 'Shed (looking north towards Bell Reserve). Inlet height (m) 1.8 gas 4.0 Particulate',
  },
  {
    name: 'Takapuna',
    id: 'Takapuna',
    Address:
      'Westlake Girls High School 2 Wairau Rd Takapuna, North Shore City',
    AS2922_compliant: 'Yes',
    Monitoring_commenced: '31 May 1995',
    Site_description_and_area_characteristics:
      'Air conditioned shed in N corner of the Westlake Girls High School playing fields, 6m from Wairau Culvert. Bounded to the E by Wairau Rd (20m NE).  The W side is bounded by the Southern Motorway (60 SW) which is about 3m above the level of the site.  Houses in area are of mixed age from 1960’s onward; about  75%  with chimneys. During the period May 2004-May 2005, for a circle of 1.5km radius around the site, 9 permits were granted for new domestic fires.',
    Distance_from_road_and_other_major_sources:
      '30m N to Wairau Rd (arterial road aligned NW-SE) 60m W to Northern Motorway.  (aligned NNW- SSE)',
    Pollutants_Monitored:
      'NOx - API 200E Gas analyser - PM10 / PM2.5 (BAM) - THERMO FH62C14 Speciation Sampling (Partisol) - THERMO 2000H GC1000 – Ecotech calibrator. Speciation sampling (RAAS) - THERMO ANDERSEN RAAS2.5-400',
    Meteorological_parameters:
      'Wind speed,  Wind direction,  Ambient temperature,  Relative humidity,  Solar radiation.',
    //Easting Northing Elevation  (m)
    NZMG: [2666510, 6489778],
    Elevation: 21,
    NZTM: [1756059, 5928077],
    google_position: undefined,
    image: 'takapuna.png',
    misc: 'View of site from south; Northern Motorway beyond. Inlet height (m) 3.0 gas       3.5 Particulate',
  },
  {
    name: 'Penrose',
    id: 'penrose',
    Address: 'Gavin St Substation 19 Gavin St Penrose, Auckland.',
    AS2922_compliant: 'Yes',
    Monitoring_commenced: 'November 2000',
    Site_description_and_area_characteristics:
      'Air conditioned shed within the Gavin St substation, approximately 106m NE of the Southern Motorway. The motorway is approximately 2m lower than the ground level at the monitoring site. From NW-S and to the NE are industrial premises; residential to the N and SW. Houses date from 1930s onward; about 50% with chimneys.',
    Distance_from_road_and_other_major_sources:
      '106m SW to Southern Motorway (aligned N-S)',
    Pollutants_Monitored:
      '(current) NOx NOx - API 200E Gas analyser - SO2 - ECOTECH 9850T PM10 (BAM) - THERMO FH62C14 Speciation Sampling (Partisol) - THERMO 2000H TSP Lead (HD Med Vol) ECOTECH GC1000 – calibrator.',
    Meteorological_parameters:
      'Wind speed Wind direction Ambient temperature Relative humidity Solar radiation Rainfall',
    //Easting Northing Elevation  (m)
    NZMG: [2672174, 6475864],
    Elevation: 40,
    NZTM: [1761751, 5914176],
    image: 'penrose.png',
    misc: 'Inlet height (m) 2.5 Monitoring shed from the north.',
  },

  {
    name: 'Milton Park Papatoetoe',
    id: 'Milton',
    Address: 'Next to Chaldean Society Hut Milton Park, Papatoetoe',
    AS2922_compliant: 'Unsure – due to proximetery of large tree.',
    Monitoring_commenced: 'January 2017',
    Site_description_and_area_characteristics:
      'The site is located at Milton Park in Papatoetoe next to the old scout hut (now owned by the Chaldean Society).  There is residential housing surrounding the site, many with chimney stacks. There are no major roads nearby. This site sits between the Southern and south-western motorways covering an area of South Auckland. Modelling of the area suggests this area will receive high winter wood smoke emissions.',
    Pollutants_Monitored: '(Likely) BAM NOx CO',
    Meteorological_parameters:
      'Wind speed,  Wind direction,  Ambient temperature,  Relative humidity,  Solar radiation.',
    NZMG: [2673967.8076101453, 6468494.411748561],
    NZTM: [0, 0],
    image: 'milton.png',
    misc: 'Health and safety:\
The site is secure from the public behind a locked gate.  The cabin is situated very close to two sets of live power lines running above the cabin to neighbouring buildings. Access to the roof needs to be assessed and possible restrictive boundary-frames need to be installed on the roof to minimize risks of falling and powerline contact. New, stronger locks have been fixed to the cabin door.',
    //google_position:[-36.970614, 174.837432]
  },
  {
    name: 'Patumahoe',
    id: 'Patumahoe',
    Address:
      'Crop and Food Research Station Cronin Rd, Patumahoe  Pukekohe, Franklin.',
    AS2922_compliant: 'Yes',
    Monitoring_commenced: '21 October 1996',
    Site_description_and_area_characteristics:
      'Air conditioned shed located within the Crop and Food Research Station, Pukekohe. The site is located approximately 2.5km west of the Pukekohe urban area. There are greenhouses and sheds 8m to N and 20m from W to SW; a 4m hedge 30m to the S, an 8m hedge 40m to the E and an 8m hedge 50m to the N. Surrounding area is used for horticulture and agriculture.',
    Distance_from_road_and_other_major_sources:
      '100m from Cronin Rd (rural road).',
    Pollutants_Monitored:
      'O3 - API 400E – Ozone analyser    NOx - API 200E Gas analyser - Nitrogen Oxides PM10 / PM2.5 - THERMO FH62C14 – Beta Attenuation Monitor Calibrator.- ECOTECH GASCAL 1100 –',
    Meteorological_parameters:
      'Wind speed,  Wind direction,  Ambient temperature,  Relative humidity,  Solar radiation.',
    //Easting Northing Elevation  (m)
    NZMG: [2673113.505865264, 6444605.298506409],
    Elevation: 16,
    NZTM: [1768407, 5913944],
    image: 'patumahoe.png',
    //google_position:[-37.185996, 174.833527],
    misc: 'Inlet height (m) 3.0 gas       3.5 Particulate Site, with adjacent met station behind.',
  },
  {
    name: 'Khyber Pass Road (Proposed)',
    id: 'Khyber',
    Address: 'Between 269 and 289 Khyber Pass Rd Newmarket, Auckland',
    AS2922_compliant: 'Yes (for gases) No (for PM10)',
    Monitoring_commenced: '29 October 1995',
    Site_description_and_area_characteristics:
      'Khyber Pass slopes down to the east and Newmarket shopping Centre (700m E). The Southern Motorway is approx. 250m W-SW from the site. Mixed residential to the NW, older houses -approximately 60% with chimneys / commercial / light industry. Newmarket shopping precinct <1km E; Auckland Domain is 250m to North.  In 2008 the site was moved 20m SE along Khyber Pass Rd. Les Mills bought 269 Khyber Pass Road in 2014 and the site was decommissioned. A new cabinet is currently waiting for approval to be installed between 269-289 Khyber Pass Road.',
    Pollutants_Monitored:
      '(Likely) BAM (PM10 only) CO NOx GC (Benzene and 1,3 Butadiene only)',
    Meteorological_parameters:
      'measured (close to site) Wind speed,  Wind direction,  Ambient temperature,  Relative humidity,  Solar radiation.',
    //Easting Northing Elevation (m)
    NZMG: [2668305, 6480185],
    Elevation: 12,
    NZTM: [1757874, 5918488],
    image: 'khyberpass.png',
    misc: 'An overhead view of the proposed site',
  },
];

function getqi(station_id, ts_json, last_value_json, source) {
  //  if(source == 0)
  //  return null;

  if (ts_json == null) return null;
  if (last_value_json == null) return null;

  for (var i = 0; i < ts_json.length; i++) {
    if (ts_json[i].station_id == station_id) {
      if (ts_json[i].parametertype_name == 'PM2.5_RAW') {
        for (var j = 0; j < last_value_json.length; j++) {
          if (
            ts_json[i].ts_id == last_value_json[j].ts_id &&
            last_value_json[j].ts_value != null
          ) {
            return { name: 'PM2.5', value: last_value_json[j].ts_value };
          }
        }
      }
    }
  }

  for (var i = 0; i < ts_json.length; i++) {
    if (ts_json[i].station_id == station_id) {
      if (ts_json[i].parametertype_name == 'PM10_RAW') {
        for (var j = 0; j < last_value_json.length; j++) {
          if (
            ts_json[i].ts_id == last_value_json[j].ts_id &&
            last_value_json[j].ts_value != null
          ) {
            return { name: 'PM10', value: last_value_json[j].ts_value };
          }
        }
      }
    }
  }
  return null;
}

function showSitesList(mymap, sites) {
  showSitesListFromDataSourse1(mymap, sites, 0);
  showSitesListFromDataSourse1(mymap, sites, 1);
}

function showSitesListFromDataSourse1(mymap, sites, source) {
  //http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValueLayer&datasource=1&format=html&station_no=1&ts_id=2280
  var ts_url;
  if (source == 1)
    ts_url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&datasource=1&format=objson&ts_name=*AA1H&parametertype_name=PM*_RAW';
  else {
    ts_url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&datasource=0&format=objson&ts_name=Raw%20Point%20Data&parametertype_name=Rainfall';
  }
  console.log(ts_url);
  d3.json(ts_url, function (ts_json) {
    if (ts_json == null) return null;
    ts_id_list = ts_json[0].ts_id;
    for (var i = 1; i < ts_json.length; i++) {
      ts_id_list += ',' + ts_json[i].ts_id;
    }
    //url to get the last value of stations from the generated list ts_id_list
    var last_value_url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValueLayer&datasource=' +
      source +
      '&format=objson&ts_id=' +
      ts_id_list;
    console.log(last_value_url);
    d3.json(last_value_url, function (last_value_json) {
      //code here
      if (last_value_json == null) return;
      for (var i = 0; i < last_value_json.length; i++) {}
      var url =
        'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getStationList&format=objson&datasource=' +
        source;
      d3.json(url, function (json) {
        //code here
        if (json == null) return;
        for (var i = 0; i < json.length; i++) {
          var site = json[i];
          //console.log(i+" ");
          //console.log(sitea);
          //console.log(Object.keys(sitea));
          if (site.station_latitude != 0 && site.station_longitude != 0) {
            var aqi = getqi(site.station_id, ts_json, last_value_json, source);
            console.log(site.station_name);
            showSite(mymap, site, source, aqi);
          }
        }
      });
    });
  });
}

function showSitesListFromDataSourse0(mymap, sites, source) {
  //http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValueLayer&datasource=1&format=html&station_no=1&ts_id=2280
  var url =
    'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getStationList&format=objson&datasource=' +
    source;
  d3.json(url, function (json) {
    //code here
    if (json == null) return;
    for (var i = 0; i < json.length; i++) {
      var site = json[i];
      if (site.station_latitude != 0 && site.station_longitude != 0) {
        console.log(site.station_name);
        showSite(mymap, site, source, null);
      }
    }
  });
}

var color_scheme_PM10 = {
  circleColor: '#6DA398',
  textColor: '#0E5144',
  waveTextColor: '#6DA398',
  waveColor: '#246D5F',
};

var color_scheme_pm25 = {
  circleColor: '#FF7777',
  textColor: '#FF4444',
  waveTextColor: '#FFAAAA',
  waveColor: '#FFDDDD',
};

var color_scheme_CO = {
  circleColor: '#D4AB6A',
  textColor: '#553300',
  waveTextColor: '#805615',
  waveColor: '#AA7D39',
};

var color_scheme_SO2 = {
  circleColor: '#808015',
  textColor: '#555500',
  waveTextColor: '#FFFFAA',
  waveColor: '#AAAA39',
};

function ShowStationInfo(station_id, station_name) {
  var ts_url;
  var source = 1;
  if (source == 1)
    ts_url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&station_id=' +
      station_id +
      '&datasource=' +
      source +
      '&format=objson&ts_name=*AA1H&parametertype_name=*RAW';
  else {
    ts_url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesList&station_id=' +
      station_id +
      '&datasource=' +
      source +
      '&format=objson&ts_name=R*&parametertype_name=*';
  }
  console.log(ts_url);

  d3.json(ts_url, function (ts_json) {
    if (ts_json == null) {
      console.log('Fail to get any information');
      return null;
    }

    var msg = ' Station Name: ' + station_name + ' Site ID.:  ' + station_id;
    d3.select('#chartstable').append('text').text(msg);

    ShowLatestValueForTimeSeries(source, ts_json);
    for (var i = 0; i < ts_json.length; i++) {
      // show_barchar(ts_json[i].ts_id,ts_json[i].parametertype_name,color_scheme,source);
      //   return;
      /*
            switch(ts_json[i].parametertype_id)
            {
              case 260:
               show_barchar(ts_json[i].ts_id,"CO PPM");
               break;
               case 250:
               show_barchar(ts_json[i].ts_id,"CO MG");
               break;
               case 290:
               show_barchar(ts_json[i].ts_id,"NO PPB");
               break;
               case 330:
               show_barchar(ts_json[i].ts_id,"NOX PPB");
               break;
               case 310:
               show_barchar(ts_json[i].ts_id,"CO PPM");
            }
*/
    }
  });
}

function show_barchar(ts_id, parametertype_name, color_scheme, source) {
  //  var url ="charts/d3/linechart/PM Datasets.csv";

  var url;
  if (source == 1)
    url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValues&datasource=' +
      source +
      '&format=csv&csvdiv=,&ts_id=' +
      ts_id +
      '&period=p7d';
  else {
    url =
      'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValues&datasource=' +
      source +
      '&format=csv&csvdiv=,&ts_id=' +
      ts_id +
      '&period=complete';
  }
  append_chart('chartstable', url, parametertype_name, source, ts_id);
  return;
  console.log(url);
  var svg = d3
      .select('#chartstable')
      .append('svg')
      .attr('width', 500)
      .attr('height', 100),
    margin = { top: 20, right: 20, bottom: 20, left: 20 },
    width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom;

  svg.on('click', function () {
    console.log('rect');
    window.open('./charts/d3/linechart/brush.html', '_self');
    d3.event.stopPropagation();
  });

  var x = d3.scaleBand().range([0, width]).padding(0.1),
    y = d3.scaleLinear().range([height, 0]);

  var g = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg
    .append('text')
    .text(parametertype_name)
    //        .attr("class", "liquidFillGaugeText")
    .attr('text-anchor', 'middle')
    .attr('font-size', 15 + 'px')
    .style('fill', '#0F5681')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  d3.csv(
    url,
    function (d) {
      //          d.frequency = +d.frequency;
      var keys = Object.keys(d);
      if (isNaN(d[keys[0]])) d[keys[0]] = 0;
      if (d[keys[0]] == null) d[keys[0]] = 0;
      //d[keys[0]] += d[keys[0]];
      console.log(d[keys[0]]);
      return d;
    },
    function (error, data) {
      if (error) throw error;
      //  for(var i=0; i< data.length; i++)
      {
        console.log(data[0]);
        console.log(data[1]);
        var keys = Object.keys(data[1]);
        console.log(data[0][keys[0]], data[0][keys[1]]);

        //              console.log(data[1]);
      }
      data = data.slice(-(data.length - 2));
      //  return;
      x.domain(
        data.map(function (d) {
          return d[keys[1]];
        })
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d[keys[0]];
        }),
      ]);

      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y).ticks(3))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');

      g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .style('fill', color_scheme.textColor)
        .attr('class', 'bar')
        .attr('x', function (d) {
          return x(d[keys[1]]);
        })
        .attr('y', function (d) {
          return y(d[keys[0]]);
        })
        .attr('width', x.bandwidth())
        .attr('height', function (d) {
          return height - y(d[keys[0]]);
        });
    }
  );
}

function showSite(mymap, site, source, aqi) {
  /*
  //NZMG
  var firstProjection  = //'+proj=nzmg +lat_0=-41.0 +lon_0=173.0 +x_0=2510000.0 +y_0=6023150.0 +ellps=intl +units=m';
                         '+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +ellps=intl +datum=nzgd49 +units=m +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +no_defs';

  //NZTM
  var secondProjection = '+proj=tmerc +lat_0=0.0 +lon_0=173.0 +k=0.9996 +x_0=1600000.0 +y_0=10000000.0 +datum=WGS84 +units=m +no_defs';

  //var secondProjection = 'GOOGLE';
  //I'm not going to redefine those two in latter examples.

  var nzmg ;
  if("NZMG" in site && site["NZMG"] != undefined)
  {
  var test1 = proj4(firstProjection).inverse(site.NZMG);
  latitude = test1[1];
  longitude = test1[0];
  nzmg = site.NZMG;
} else
  if("google_position" in site && site["google_position"] != undefined ) {
   latitude = site.google_position[0];
   longitude = site.google_position[1];
   nzmg = proj4(firstProjection).forward([longitude,latitude]);
 }
*/
  var latitude = -36.970614;
  var longitude = 174.837432;
  latitude = site.station_latitude;
  longitude = site.station_longitude;

  //var test1  =  'hello' ;//proj4.toPoint(test1));
  /*
 var msg =
 "<b>Site Name:</b> " +
 site.name +
 "<br /><b>Site description and area characteristics: </b><br />" +
 site.Site_description_and_area_characteristics +
 "<br /><b>Distance from road and other major sources: </b><br />" +
 site.Distance_from_road_and_other_major_sources +
 "<br /><b>Pollutants Monitored: </b><br />" +
 site.Pollutants_Monitored +
 "<br /><b>Meteorological parameters measured on site:</b><br />" +
 site.Meteorological_parameters+
 '<br/><img src="sites_images/'+site.image+'" alt="'+ site.name +'">'
 ;*/
  var msg =
    '<b>Site Name:</b> ' +
    site.station_name +
    ' <br> <b>Site ID:  </b>' +
    site.station_id +
    '<section id="chartstable">' +
    ' <svg   width="1000" height="1" ></svg>' +
    '</section>';

  var html_info =
    ' <svg id="g' +
    site.station_id +
    '5" width="100%" height="100%" onclick="' +
    site.station_id +
    '5".update(NewValue());"></svg>';
  var myIcon;
  if (aqi)
    myIcon = L.divIcon({
      className: '.my-label',
      iconSize: [50, 50],
      html: html_info,
    });
  // you can set .my-div-icon styles in CSS
  //console.log(site.station_latitude + " " + site.station_longitude +" " +  site.station_name + " " + site.station_id);
  var marker;
  if (aqi)
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
  marker.bindPopup(msg, { maxWidth: 1000, minWidth: 300 });
  marker.addTo(mymap);

  if (aqi) {
    var config5 = liquidFillGaugeDefaultSettings();
    // config5.circleThickness = 0.4;
    //config5.waveAnimateTime = 5000;
    config5.circleColor = '#009966';
    config5.textColor = '#000000';
    config5.waveTextColor = '#FFFFFF';
    config5.waveColor = '#009966';

    config5.waveAnimateTime = 2000;
    config5.waveHeight = 0.4;
    config5.waveAnimate = true;
    config5.waveCount = 1;
    config5.waveOffset = 0.25;
    config5.minValue = 30;
    config5.maxValue = 150;
    config5.displayPercent = false;
    var gauge6 = loadLiquidFillGauge(
      'g' + site.station_id + '5',
      aqi.name,
      aqi.value,
      config5
    );
  }
  /*
     var config1 = liquidFillGaugeDefaultSettings();
 config1.circleColor = "#FF7777";
 config1.textColor = "#FF4444";
 config1.waveTextColor = "#FFAAAA";
 config1.waveColor = "#FFDDDD";
// config1.circleThickness = 0.2;
 config1.waveAnimateTime = 2000;
 //  config2.waveAnimateTime = 2000;
 config1.waveHeight = 0.5;
 config1.waveCount = 3;
 var gauge2= loadLiquidFillGauge(site.id+"1", "PM2.5",28, config1);
   var config2 = liquidFillGaugeDefaultSettings();
     config2.circleColor = "#D4AB6A";
     config2.textColor = "#553300";
     config2.waveTextColor = "#805615";
     config2.waveColor = "#AA7D39";
    // config2.circleThickness = 0.1;
    // config2.circleFillGap = 0.2;
     config2.waveAnimateTime = 2000;
     config2.waveHeight = 0.3;
     config2.waveCount = 1;
     var gauge3 = loadLiquidFillGauge(site.id+"2","CO", 60.1, config2);
     var config3 = liquidFillGaugeDefaultSettings();
     config3.waveAnimateTime = 1000;
     config3.waveHeight = 0.45;
     config3.waveAnimate = true;
     config3.waveOffset = 0.25;
     config3.valueCountUp = false;
     config3.displayPercent = false;
     var gauge4 = loadLiquidFillGauge(site.id+"3","NOx", 50, config3);
     var config4 = liquidFillGaugeDefaultSettings();
     config4.circleThickness = 0.15;
     config4.circleColor = "#808015";
     config4.textColor = "#555500";
     config4.waveTextColor = "#FFFFAA";
     config4.waveColor = "#AAAA39";
     config4.waveAnimateTime = 1000;
     config4.waveHeight = 0.05;
     config4.waveAnimate = true;
     config4.waveRise = false;
     config4.waveHeightScaling = false;
     config4.waveOffset = 0.25;
     config4.waveCount = 3;
     var gauge5 = loadLiquidFillGauge(site.id+"4","SO2", 60.4, config4);

*/

  marker.on('click', function (e) {
    //ShowBarChart("barchart1","PM2.5");
    //ShowBarChart("barchart2","PM10");
    //ShowBarChart("barchart3","CO2");
    //ShowBarChart("barchart4","CO");
    //   this.setOpacity(0.4);
    this.openPopup();
    ShowStationInfo(site.station_id, source, 'CO', color_scheme_CO);
    /*   ShowBarChart("bar"+site.id +"2","PM2.5",color_scheme_pm25);
   ShowBarChart("bar"+site.id +"3","PM10",color_scheme_PM10);
   ShowBarChart("bar"+site.id +"4","CO2",color_scheme_SO2);
   ShowBarChart("bar"+site.id +"5","NO2",color_scheme_pm25);
   ShowBarChart("bar"+site.id +"6","NOX",color_scheme_SO2);*/
  });
  /*
      marker.on('mouseout', function(e)
       {
         this.setOpacity(1.0);
           this.closePopup();
       });*/

  //      marker.bindPopup( msg ).openPopup();
  //      marker.bindTooltip("my tooltip text").openTooltip();

  //          L.marker([latitude,longitude]).bindTooltip("my tooltip text").openTooltip();

  if (source == 1) {
    L.circle([latitude, longitude], 50, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
    })
      .addTo(mymap)
      .bindPopup(msg, { maxWidth: 700, minWidth: 300 });
  }
  /*
         L.polygon([
           [test1[1]+0.005, test1[0]],
           [test1[1]-0.003, test1[0]+0.007],
           [test1[1]-0.003, test1[0]-0.007]
         ]).addTo(mymap).bindPopup("I am a polygon.");
         */
}
