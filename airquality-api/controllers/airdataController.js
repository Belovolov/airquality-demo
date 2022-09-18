const express = require("express")
const app = express()
const helpers = require('../helpers')
const stations = require('../models/stationsModel')
const timeseries = require('../models/timeseriesModel')
const timeseriesvalues = require('../models/timeseriesValuesModel')
const timeseriesvalueslayer = require('../models/timeseriesValuesLayerModel')

app.set("view engine","ejs")

exports.getStationList = function(query, res) {
	stations.returnStations(query, function (err, rows) {
	   	prepareAndSendResponse(err,rows,query,res)
  	})
}

exports.getTimeseriesList = function(query,res) {
	timeseries.returnTimeseries(query, function (err, rows) {
	   	prepareAndSendResponse(err,rows,query,res)
  	})
}
exports.getTimeseriesValues = function(query,res) {
	timeseriesvalues.returnTimeseriesValues(query, function (err, rows) {		
	   	prepareAndSendResponse(err,rows,query,res)
  	})
}

exports.getTimeseriesValueLayer = function(query,res) {
	timeseriesvalueslayer.returnTimeseriesValueLayer(query, function (err, rows) {
	   	prepareAndSendResponse(err,rows,query,res)
  	})
}

function prepareAndSendResponse(err,rows,query,res) {
	if (err) {		
		console.log("Error occured: " + err)
		res.setHeader('Access-Control-Allow-Origin','*')
		res.status(501).send(rows)
	}
	else {
		let response = helpers.format_response(query["format"], rows, query["csvdiv"])
		res.setHeader('Content-disposition', response["content-disp"]!=undefined ? response["content-disp"] : '');
		res.setHeader('Access-Control-Allow-Origin','*')
		res.set('Content-Type', response.type);
		res.status(200).send(response.data);
	}
}