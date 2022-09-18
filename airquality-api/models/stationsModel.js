const db0=require('../db0'); //reference of dbconnection.js
const db1=require('../db1');
const settings=require('../settings')
const helpers=require('../helpers')

exports.returnStations = function(query, done) {
	let sqlStatement;
	let datasource;
	if (query.hasOwnProperty("returnfields")) {
		let validFields = query["returnfields"].split(',').filter(function(element, index, array) {
			return settings.stationsReturnFields.indexOf(element)>=0
		}).join(',')
		sqlStatement = "SELECT " + validFields + " FROM stations WHERE 1=1"
	} else {
		sqlStatement = "SELECT " + settings.stationsReturnFields.join(',') + " FROM stations WHERE 1=1"
	}
	
	sqlStatement += helpers.prepareConditions(query,settings.stationsRequestFields)
	console.log(sqlStatement)
	if (query["datasource"]==1)	datasource=db1
	else datasource=db0;
	datasource.get().query(sqlStatement, function (err, rows) {
    	if (err) done(err)
    	else {
    		done(null, rows)
    	}
  	})
}  	