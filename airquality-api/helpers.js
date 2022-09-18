const app = require('express')();
const json2csv = require('json2csv');
app.set('view engine', 'ejs');

exports.prepareConditions = function (query, requestFields) {
  //prepare the where clause based on query string and settings
  let sqlStatement = '';
  requestFields.forEach(function (field) {
    if (query.hasOwnProperty(field.name)) {
      if (field.isWildcard && field.isList) {
        let list = query[field.name].split(',');
        sqlStatement += list.reduce(function (
          previousValue,
          currentValue,
          index,
          array
        ) {
          if (index == array.length - 1)
            return (
              previousValue +
              field.name +
              " LIKE '" +
              currentValue.replace('*', '%') +
              "')"
            );
          else
            return (
              previousValue +
              field.name +
              " LIKE '" +
              currentValue.replace('*', '%') +
              "' OR "
            );
        },
        ' AND (');
      } else if (field.isWildcard && !field.isList) {
        let list = query[field.name].split(',');
        sqlStatement +=
          ' AND ' +
          field.name +
          "  LIKE '" +
          query[field.name].replace('*', '%') +
          "'";
      } else if (!field.isWildcard && field.isList) {
        let list = query[field.name].split(',');
        console.log('list of ids: ' + list);
        console.log('value of the query field: ' + query[field.name]);
        sqlStatement +=
          ' AND ' + field.name + '  IN (' + query[field.name] + ')';
      } else {
        sqlStatement += ' AND ' + field.name + '=' + query[field.name];
      }
    }
  });
  return sqlStatement;
};

exports.prepareTimeConditions = function (query) {
  /*prepare the where clause for time conditions specified in a query
	from + to:	will return the requested range
	from + period:	will return the given period starting at the from date
	to + period:	will return the given period backdating from the to date
	period:	will return the given period backdating from the current system time
	period=complete:	will return the complete coverage of all requested timeseries
	from:	will return all data starting at the given from date until the current system time
	to:*/
  let sqlStatement = '';
  if (query.hasOwnProperty('period')) {
    if (query['period'] == 'complete') {
      sqlStatement = '';
    } else {
      let period = getPeriod(query['period']);

      if (query.hasOwnProperty('to')) {
        //return from "to" to "to" - "period"
        sqlStatement += " and tstimestamp<= '" + query['to'] + "'";
        sqlStatement +=
          " and tstimestamp>= str_to_date('" +
          query['to'] +
          "','%Y-%m-%dT%H:%i:%s.000 12:00') - " +
          getSqlPeriodString(period, '-');
      } else if (query.hasOwnProperty('from')) {
        //return from "from" to "from" + "period"
        sqlStatement += " and tstimestamp>='" + query['from'] + "'";
        sqlStatement +=
          " and tstimestamp<= str_to_date('" +
          query['to'] +
          "','%Y-%m-%dT%H:%i:%s.000 12:00') + " +
          getSqlPeriodString(period, '+');
      } else
        sqlStatement +=
          ' and tstimestamp>= now() - ' + getSqlPeriodString(period, '-');
    }
  } else if (query.hasOwnProperty('from'))
    if (query.hasOwnProperty('to')) {
      //return from "from" to "to"
      sqlStatement += " and tstimestamp>='" + query['from'] + "''";
      sqlStatement += " and tstimestamp<='" + query['to'] + "'";
    } else {
      //return from "from" to now
      sqlStatement += " and tstimestamp>='" + query['from'] + "'";
    }
  else if (query.hasOwnProperty('to')) {
    //return from earliest to "to"
    sqlStatement += " and tstimestamp<='" + query['to'] + "'";
  } else sqlStatement = '';
  return sqlStatement;
};

exports.format_response = function (format, rows, delimiter) {
  //formats the response JSON object to the specified format (html, json, csv etc.)
  if (rows.length == 0) rows = ['No matches.'];
  switch (format) {
    case 'csv':
      let fields = Object.keys(rows.length > 0 ? rows[0] : rows);
      let del = delimiter ? delimiter : ',';
      let csv = json2csv({ data: rows, fields: fields, del: del });
      return {
        type: 'text/csv',
        data: csv.slice(csv.search(/\n/) + 1),
        'content-disp': 'attachment; filename=export.csv',
      };
    case 'html':
      if (rows.length > 0) {
        let thishtml;
        app.render('../views/stations', { rows: rows }, function (err, html) {
          if (!err) thishtml = html;
          else thishtml = 'Error during rendering: ' + err;
        });
        return { type: 'text/html', data: thishtml };
      }
      return { type: 'text/html', data: '' };
    case 'tabjson':
      var result = [];
      result[0] = Object.keys(rows.length > 0 ? rows[0] : rows);
      for (var i = 1; i <= rows.length; i++) {
        result.push([]);
        for (var prop in rows[i - 1]) {
          result[i].push(rows[i - 1][prop]);
        }
      }
      return { type: 'application/json', data: result };
    case 'objson':
    case 'json':
    case undefined:
      return { type: 'application/json', data: rows };
    default:
      return {
        type: 'application/json',
        data: { error: 'Unsupported format' },
      };
  }
};

function getPeriod(periodString) {
  //parse the period parameter which is like p#y#m#dt#h#m#s case insensitive
  let period = {
    years: 0,
    month: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  if (periodString.search(/(\d+)y/i) >= 0)
    period.years = periodString.match(/(\d+)y/i)[1];
  if (periodString.search(/(\d+)m/i) >= 0)
    period.month = periodString.match(/(\d+)m/i)[1];
  if (periodString.search(/(\d+)d/i) >= 0)
    period.days = periodString.match(/(\d+)d/i)[1];
  if (periodString.search(/t(\d+)h/i) >= 0)
    period.hours = periodString.match(/t(\d+)h/i)[1];
  if (periodString.search(/t.+?(\d+)m/i) >= 0)
    period.minutes = periodString.match(/t.+?(\d+)m/i)[1];
  if (periodString.search(/t.+?(\d+)s/i) >= 0)
    period.seconds = periodString.match(/t.+?(\d+)s/i)[1];
  return period;
}

function getSqlPeriodString(period, sign) {
  //gets the deducted or added amount of time units for SQL query based on period
  return (
    ' INTERVAL ' +
    period.years +
    ' YEAR ' +
    sign +
    ' INTERVAL ' +
    period.month +
    ' MONTH ' +
    sign +
    ' INTERVAL ' +
    period.days +
    ' DAY ' +
    sign +
    ' INTERVAL ' +
    period.hours +
    ' HOUR ' +
    sign +
    ' INTERVAL ' +
    period.minutes +
    ' MINUTE ' +
    sign +
    ' INTERVAL ' +
    period.seconds +
    ' SECOND '
  );
}

exports.requestSeries = function (database, statementsSet, results, done) {
  //recursively executes the series of SQL queries and adds results to "results" array
  let query = statementsSet.pop();
  if (query) {
    asyncQuery(database, query, function (err, result) {
      if (err) return done(err, null);
      else {
        if (result != null) results.push(result);
        return exports.requestSeries(database, statementsSet, results, done);
      }
    });
  } else {
    return done(null, [].concat.apply([], results));
  }
};

function asyncQuery(database, query, callback) {
  //executes the given query on a given database and passess results to the callback
  database.get().query(query, function (err, rows) {
    if (err) {
      if (err.toString().search(/ER_NO_SUCH_TABLE/) < 0) callback(err, null);
      else callback(null, null);
    } else {
      callback(null, rows);
    }
  });
}
