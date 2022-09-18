const db0 = require('../db0'); //reference of dbconnection.js
const db1 = require('../db1');
const mysql = require('mysql');
const settings = require('../settings');
const helpers = require('../helpers');

exports.returnTimeseriesValueLayer = function (query, done) {
  let sqlStatements = [];
  let sqlWhere = '';
  let sqlFields = '';
  let datasource = db1;
  let error = '';

  sqlFields = 'SELECT ' + settings.timeseriesValuesLayerBasicFields.join(',');

  if (query.hasOwnProperty('metadata')) {
    if (query.hasOwnProperty('md_returnfields')) {
      let validFields = query['md_returnfields']
        .split(',')
        .filter(function (element, index, array) {
          return (
            settings.timeseriesValuesLayerAvailableMetadataFields.indexOf(
              element
            ) >= 0
          );
        });
      sqlFields += ',' + validFields.join(',');
    } else
      sqlFields +=
        ',' + settings.timeseriesValuesLayerDefaultMetadataFields.join(',');
  }

  if (query.hasOwnProperty('ts_id')) {
    if (query['datasource'] == 0) {
      done('501', {
        type: 'error',
        code: 'InvalidParameterValue',
        message: "Datasource 0 can't be used for this type of query",
      });
    } else {
      console.log('queried id: ' + query['ts_id']);
      if (query['ts_id'] == '') {
        done('501', {
          type: 'error',
          code: 'InvalidParameterValue',
          message: 'ts_id must be a number.',
        });
      } else {
        ids = query['ts_id'].split(',');
        ids.forEach(function (id, index, array) {
          if (id.search(/^\d+$/) == 0) {
            if (query.hasOwnProperty('date'))
              sqlWhere =
                " AND date_format(tstimestamp,'%Y-%m-%d')='" +
                query['date'] +
                "'";
            else sqlWhere = 'ORDER by 2 desc limit 1 '; //"AND tstimestamp=(SELECT max(tstimestamp) FROM tsid" + id + "tbl WHERE tsvalue IS NOT NULL)" //AND tsvalue<>'None'
            sqlStatements.push(
              sqlFields +
                ' FROM (' +
                'SELECT * from (select tsl.ts_id, convert(st.station_latitude, DECIMAL(14,9)) station_latitude, convert(st.station_longitude, DECIMAL(14,9)) station_longitude, st.station_name, parametertype_name, ts_name, ts_unitsymbol, st.station_no, st.station_id ' +
                'FROM stations st, timeserieslist tsl ' +
                'WHERE tsl.ts_id=' +
                id +
                ' and tsl.station_id=st.station_id) st ' +
                'INNER JOIN ' +
                '(select ' +
                id +
                " id, date_format(tstimestamp,'%Y-%m-%dT%H:%i:%s.000+12:00') timestamp, if(tsvalue IS NULL,'None',tsvalue) ts_value " +
                'from ' +
                '(select t.TSTimestamp + INTERVAL ceil(diff/24) DAY tstimestamp, t.TSValue from ' +
                'tsid' +
                id +
                'tbl t,' +
                '(select TSTimestamp break, tsvalue,timestampdiff(HOUR,TSTimestamp,now()) diff from tsid' +
                id +
                'tbl ' +
                'where TSTimestamp = (select max(TSTimestamp) from tsid' +
                id +
                'tbl where tsvalue is NOT NULL)) bp ' +
                'where tstimestamp> break - INTERVAL ceil(diff/24) DAY ' +
                'and tstimestamp < now() - INTERVAL ceil(diff/24) DAY) s ' +
                ' WHERE 1=1 ' +
                sqlWhere +
                ') tsv ON tsv.id=st.ts_id) sel'
            );
          }
        });
        console.log(sqlStatements);
        helpers.requestSeries(
          datasource,
          sqlStatements,
          [],
          function (err, results) {
            done(err, results);
          }
        );
      }
    }
  } else {
    done('501', {
      type: 'error',
      code: 'InvalidParameterValue',
      message: 'ts_id must be a number.',
    });
  }
};
