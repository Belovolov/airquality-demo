const db0=require('../db0'); //reference of dbconnection.js
const db1=require('../db1');
const settings=require('../settings')
const helpers=require('../helpers')

exports.returnTimeseriesValues = function(query, done) {

	console.log("query is: \n"+query)
	let sqlStatements=[];
	let sqlWhere;
	let datasource = db1;
	sqlWhere = "WHERE 1=1" + helpers.prepareTimeConditions(query);

	if (query.hasOwnProperty("ts_id")) {
		if (query["datasource"]==0) {
			done("501", {type: "error", code: "InvalidParameterValue",message: "Datasource 0 can't be used for this type of query"})
		}	
		else {
			ds=db1;
			ids = query["ts_id"].split(',')
			console.log("id array: " + ids)
			ids.forEach(function(id,index,array) {
				if ((id.search(/^\d+$/))==0) {
					sqlStatements.push('SELECT a,b FROM (SELECT "#ts_id" a, "' + id + '" b FROM dual ' +
					'UNION SELECT "#rows" a , "#count" b' +
					' UNION SELECT "#Timestamp" a, "Value" b FROM dual ' + 
					"UNION SELECT date_format(tstimestamp,'%Y-%m-%dT%H:%i:%s.000+12:00') a, tsvalue FROM " +
					"(select t.TSTimestamp, t.TSValue from tsid" + id + "tbl t " +
					"where TSTimestamp <= (select max(TSTimestamp) from tsid" + id + "tbl where tsvalue is Not NULL) " +
					"union all " +
					"select t.TSTimestamp + INTERVAL ceil(diff/24) DAY, t.TSValue from " +
						"tsid" + id + "tbl t," +
					    "(select TSTimestamp break, tsvalue,timestampdiff(HOUR,TSTimestamp,now()) diff from tsid" + id + "tbl " +
					    "where TSTimestamp = (select max(TSTimestamp) from tsid" + id + "tbl where tsvalue is NOT NULL)) bp " +
					"where tstimestamp> break - INTERVAL ceil(diff/24) DAY " +
					"and tstimestamp < now() - INTERVAL ceil(diff/24) DAY) c " + sqlWhere + ") sel");
				}
			})
			
			console.log(sqlStatements)
			helpers.requestSeries(datasource, sqlStatements, [], function(err, results){
				done(err,results)
			})
	  	}  	
	}
	else {
		done("501", {
				type: "error",
				code: "InvalidParameterValue",
				message: "ts_id must be a number."
			}
		)
	}
} 
