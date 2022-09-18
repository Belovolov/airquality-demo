//this file contains available request and return fields for each of the models

exports.stationsReturnFields = ["station_no","station_id","station_name","station_latitude","station_longitude"];
exports.stationsRequestFields = [
{
	name: "station_no",	isWildcard: true, isList: true
},
{
	name: "station_id",	isWildcard: false, isList: true
},
{
	name: "station_name", isWildcard: true,	isList: true
}
]

exports.timeseriesReturnFields = ["station_no","station_id","station_name","ts_id","ts_name","parametertype_id","parametertype_name"]
exports.timeseriesRequestFields = [
{
	name: "station_no",	isWildcard: true, isList: true
},
{
	name: "station_id",	isWildcard: false, isList: true
},
{
	name: "station_name", isWildcard: true,	isList: true
},
{
	name: "ts_id", isWildcard: false, isList: true
},
{
	name: "ts_name", isWildcard: true, isList: true
},
{
	name: "parametertype_id", isWildcard: false, isList: true
},
{
	name: "parametertype_name",	isWildcard: true, isList: true
},
]

exports.timeseriesValuesReturnFields = ["ts_id","tstimestamp","tsvalue"]
exports.timeseriesValuesRequestFields = [
{
	name: "ts_id", isWildcard: false, isList: true
}
]

exports.timeseriesValuesLayerBasicFields =["ts_id","timestamp","ts_value","station_latitude","station_longitude"]
exports.timeseriesValuesLayerAvailableMetadataFields=["parametertype_name","station_name","ts_name","ts_unitsymbol","station_no","station_id"]
exports.timeseriesValuesLayerDefaultMetadataFields=["parametertype_name","station_name","ts_name","ts_unitsymbol","station_no"]
