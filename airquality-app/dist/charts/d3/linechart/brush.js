var parseDate = d3.timeParse('%Y-%m-%dT%H:%M:%S.%L%Z');

function type(d) {
  if (d[0] == null) d[0] = 0;
  if (d[1] == null || isNaN(d[1])) d[1] = 0;
  date = d[0];
  var tmp = parseDate(date);
  //  console.log(date);
  //  console.log(tmp);
  //  console.log(d.date, d.value);
  d[0] = tmp;
  return d;
}

function append_chartwithtimestamp(
  ts_id,
  timestamp,
  parametertype_name,
  ts_name,
  source
) {
  if (timestamp == null) {
    console.log('No TimeStamp find for ' + ts_id);
    return;
  }
  console.log(ts_id + '  ' + timestamp);
  var latest = parseDate(timestamp);
  var from = d3.timeDay.offset(latest, -7);
  console.log(latest);
  console.log(from);

  url =
    'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValues&datasource=' +
    source +
    '&format=csv&csvdiv=,&ts_id=' +
    ts_id +
    '&to=' +
    timestamp +
    '&period=p1m';
  append_chart('chartstable', url, parametertype_name, ts_name);
}

function ShowLatestValueForTimeSeries(source, ts_json) {
  var ts_id_list = ts_json.map(function (d) {
    return d.ts_id;
  });
  var url =
    'http://localhost:10300/KiWIS/KiWIS?service=kisters&type=queryServices&request=getTimeseriesValueLayer&datasource=' +
    source +
    '&format=objson&ts_id=' +
    ts_id_list.join() +
    '&metadata=true&md_returnfields=station_id,parametertype_name,station_name,ts_name,ts_unitsymbol,station_no';
  d3.json(url, function (error, test_data) {
    for (var i = 0; i < test_data.length; i++) {
      append_chartwithtimestamp(
        test_data[i].ts_id,
        test_data[i].timestamp,
        test_data[i].parametertype_name,
        test_data[i].ts_name,
        source
      );
    }

    tabulate(test_data, Object.keys(test_data[0]));
    function tabulate(test_data, columns) {
      var table = d3.select('#chartstable').append('table');
      var thead = table.append('thead');
      var tbody = table.append('tbody');

      // append the header row
      thead
        .append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function (column) {
          if (
            column != 'station_latitude' &&
            column != 'ts_id' &&
            column != 'station_name' &&
            column != 'station_longitude' &&
            column != 'station_no' &&
            column != 'station_id'
          )
            return column;
        });

      // create a row for each object in the data
      var rows = tbody.selectAll('tr').data(test_data).enter().append('tr');

      // create a cell in each row for each column
      var cells = rows
        .selectAll('td')
        .data(function (row) {
          return columns.map(function (column) {
            if (
              column != 'station_latitude' &&
              column != 'ts_id' &&
              column != 'station_name' &&
              column != 'station_longitude' &&
              column != 'station_no' &&
              column != 'station_id'
            )
              return { column: column, value: row[column] };
          });
        })
        .enter()
        .append('td')
        .text(function (d) {
          if (d != undefined) return d.value;
        });

      return table;
    }
  });
}

function append_chart(id, data_url, parametertype_name, ts_name) {
  /*
if(source == 0)
{
  d3.text(data_url, function(text) {
    var data = d3.csvParseRows(text,
      type,
      function(data){console.log(data); return data;});
    console.log(data);
    for(var i=0; i < data.length;i++)
    console.log(data[i][0] + "  " + data[i][1] );
  });
}
return;

*/

  console.log(data_url);
  d3.text(data_url, function (text) {
    if (text.length <= 0) return;
    var data = d3.csvParseRows(text, type);
    if (data.length <= 3) {
      var text2 = d3
        .select('#' + id)
        .append('text')
        .text('No valid data got for ' + parametertype_name)
        .attr('class', 'liquidFillGaugeText')
        .attr('text-anchor', 'middle')
        .attr('font-size', 10 + 'px');
      //      .style("fill", config.waveTextColor)
      //    .attr('transform','translate('+radius+','+textRiseScaleY(config.titleVertPosition)+')');
      return;
    }

    //console.log(data);

    var data = data.slice(3 - data.length);

    var max_value = d3.max(data, function (d) {
      return parseFloat(d[1]);
    });
    console.log(max_value);
    var svg = d3
        .select('#' + id)
        .append('svg')
        .attr('width', 900)
        .attr('height', 250),
      margin = { top: 20, right: 40, bottom: 50, left: 30 },
      margin2 = { top: 220, right: 40, bottom: 20, left: 30 },
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom,
      height2 = +svg.attr('height') - margin2.top - margin2.bottom;

    svg
      .append('text')
      .text(parametertype_name + ' ' + ts_name)
      .attr('class', 'liquidFillGaugeText')
      .attr('text-anchor', 'right')
      .attr('font-size', 16 + 'px')
      //      .style("fill", config.waveTextColor)
      .attr(
        'transform',
        'translate(' + margin.left + 1 + ',' + margin.top + ')'
      );

    svg
      .append('defs')
      .append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', width)
      .attr('height', height);

    var focus = svg
      .append('g')
      .attr('class', 'focus')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var context = svg
      .append('g')
      .attr('class', 'context')
      .attr('transform', 'translate(' + margin2.left + ',' + margin2.top + ')');

    //var parseDate = d3.timeParse("%b %Y");
    //var parseDate = d3.timeParse("%m/%d/%Y,%H:%M");

    var x = d3.scaleTime().range([0, width]),
      x2 = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      y2 = d3.scaleLinear().range([height2, 0]);

    var xAxis = d3.axisBottom(x),
      xAxis2 = d3.axisBottom(x2),
      yAxis = d3.axisLeft(y);

    var brush = d3
      .brushX()
      .extent([
        [0, 0],
        [width, height2],
      ])
      .on('brush end', brushed);

    var zoom = d3
      .zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .extent([
        [0, 0],
        [width, height],
      ])
      .on('zoom', zoomed);

    var area = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x(function (d) {
        return x(d[0]);
      })
      .y0(height)
      .y1(function (d) {
        return y(d[1]);
      });

    var area2 = d3
      .area()
      .curve(d3.curveMonotoneX)
      .x(function (d) {
        return x2(d[0]);
      })
      .y0(height2)
      .y1(function (d) {
        return y2(d[1]);
      });

    function brushed() {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return; // ignore brush-by-zoom
      var s = d3.event.selection || x2.range();
      x.domain(s.map(x2.invert, x2));
      focus.select('.area').attr('d', area);
      focus.select('.axis--x').call(xAxis);
      svg
        .select('.zoom')
        .call(
          zoom.transform,
          d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
        );
    }

    function zoomed() {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return; // ignore zoom-by-brush
      var t = d3.event.transform;
      x.domain(t.rescaleX(x2).domain());
      //y.domain([0,t.rescaleY(y).domain()[1]])
      //console.log(x.domain());
      //  console.log(y.domain());
      //  console.log(y2.domain());
      //console.log(t.rescaleX(x2).domain());
      //  console.log(t.rescaleY(y).domain());
      //  console.log(t.rescaleY(y2).domain());

      focus.select('.area').attr('d', area);
      focus.select('.axis--x').call(xAxis);
      focus.select('.axis--y').call(yAxis);
      context.select('.brush').call(brush.move, x.range().map(t.invertX, t));
    }

    x.domain(
      d3.extent(data, function (d) {
        return d[0];
      })
    );

    y.domain([
      0,
      d3.max(data, function (d) {
        return parseFloat(d[1]);
      }),
    ]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    //console.log(data);

    /*

svg.append("linearGradient")
        .attr("id", "line-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0).attr("y1", y(0))
        .attr("x2", 0).attr("y2", y(18))
    .selectAll("stop")
        .data([
            {offset: "0%", color: "red"},
            {offset: "40%", color: "red"},
            {offset: "40%", color: "black"},
            {offset: "62%", color: "black"},
            {offset: "62%", color: "lawngreen"},
            {offset: "100%", color: "lawngreen"}
        ])
    .enter().append("stop")
        .attr("offset", function(d) { return d.offset; })
        .attr("stop-color", function(d) { return d.color; });
// etc
*/
    svg
      .append('linearGradient')
      .attr('id', 'line-gradient')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', y(0))
      .attr('x2', 0)
      .attr('y2', y(max_value))

      .selectAll('stop')
      .data([
        { offset: '0%', color: 'steelblue' },
        { offset: '40%', color: 'steelblue' },
        { offset: '40%', color: 'steelblue' },
        { offset: '62%', color: 'steelblue' },
        { offset: '62%', color: 'red' },
        { offset: '90%', color: 'red' },
      ])
      .enter()
      .append('stop')
      .attr('offset', function (d) {
        return d.offset;
      })
      .attr('stop-color', function (d) {
        return d.color;
      });

    focus
      .append('path')
      .datum(data)
      .attr('class', 'area')
      .style('fill', 'url(#line-gradient)')
      .attr('d', area);

    focus
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    focus.append('g').attr('class', 'axis axis--y').call(yAxis);

    context.append('path').datum(data).attr('class', 'area').attr('d', area2);

    context
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + height2 + ')')
      .call(xAxis2);

    context
      .append('g')
      .attr('class', 'brush')
      .call(brush)
      .call(brush.move, x.range());

    var mouseG = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('class', 'mouse-over-effects');

    mouseG
      .append('path') // this is the black vertical line to follow mouse
      .attr('class', 'mouse-line')
      .style('stroke', 'orange')
      .style('stroke-width', '1px')
      .style('opacity', '0');

    var lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.append('g').attr('class', 'mouse-per-line');

    mousePerLine
      .append('circle')
      .attr('r', 4)
      .style('stroke', 'red')
      .style('fill', 'none')
      .style('stroke-width', '2px')
      .style('opacity', '0');

    mousePerLine
      .append('text')
      .style('fill', 'orange')
      .style('font-size', '22px')
      .attr('transform', 'translate(14,6)');

    svg
      .append('rect')
      .attr('class', 'zoom')
      .attr('width', width)
      .attr('height', height)
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(zoom)
      .attr('pointer-events', 'all')
      .on('mouseout', function () {
        // on mouse out hide line, circles and text
        d3.select('.mouse-line').style('opacity', '0');
        d3.selectAll('.mouse-per-line circle').style('opacity', '0');
        d3.selectAll('.mouse-per-line text').style('opacity', '0');
      })
      .on('mouseover', function () {
        // on mouse in show line, circles and text
        d3.select('.mouse-line').style('opacity', '1');
        d3.selectAll('.mouse-per-line circle').style('opacity', '1');
        d3.selectAll('.mouse-per-line text').style('opacity', '1');
      })
      .on('mousemove', function () {
        // mouse moving over canvas
        //  console.log("move");
        var mouse = d3.mouse(this);
        var bisectDate = d3.bisector(function (d) {
          return d[0];
        }).left;
        var x0 = x.invert(d3.mouse(this)[0]);
        var i = bisectDate(data, x0, 1);
        //  console.log(data);
        var d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0[0] > d1[0] - x0 ? d1 : d0;
        //console.log(i);
        d3.select('.mouse-per-line').attr(
          'transform',
          'translate(' + x(d[0]) + ',' + y(d[1]) + ')'
        );
        d3.select('.mouse-per-line').select('text').text(d[1]);
        d3.select('.mouse-line').attr('d', function () {
          var t = 'M' + mouse[0] + ',' + height;
          t += 'L' + mouse[0] + ',' + 0;
          t += 'L' + mouse[0] + ',' + y(d[1]);
          t += 'L' + x(d[0]) + ',' + y(d[1]);
          return t;
        });
      });
  });
}
