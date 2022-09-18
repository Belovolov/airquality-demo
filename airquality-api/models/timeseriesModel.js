const db0=require('../db0'); //reference of dbconnection.js
const db1=require('../db1');
const settings=require('../settings')
const helpers=require('../helpers')

exports.returnTimeseries = function(query, done) {
	let sqlStatement;
	let datasource;

	if (query.hasOwnProperty("returnfields")) {
		let validFields = query["returnfields"].split(',').filter(function(element, index, array) {
			return settings.timeseriesReturnFields.indexOf(element)>=0
		}).join(',')
		sqlStatement = "SELECT " + validFields + " FROM timeserieslist WHERE 1=1"
	} else {
		sqlStatement = "SELECT * FROM timeserieslist WHERE 1=1"
	}

	sqlStatement += helpers.prepareConditions(query,settings.timeseriesRequestFields);
	console.log(sqlStatement)
	if (query["datasource"]==1)	datasource=db1
	else datasource=db0;
	datasource.get().query(sqlStatement, function (err, rows) {
    	if (err) done(err, null)
    	else {
    		done(null, rows)
    	}
  	})
}