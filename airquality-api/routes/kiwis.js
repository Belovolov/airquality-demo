const express = require('express');
const airdata_controller = require('../controllers/airdataController.js')
const router = express.Router();

router.get('/', function(req,res,next) {
    //routes the request to a specific controller function based on the query string
    const query = req.query
    if (query&&query.service&&query.type) {
        if ((query["service"]=="kisters")&&(query["type"]=="queryServices")) {
            switch (query["request"]) {
                case 'getStationList':
                    airdata_controller.getStationList(req.query,res)
                    break
                case 'getTimeseriesList':
                    airdata_controller.getTimeseriesList(req.query,res)
                    break
                case 'getTimeseriesValues':
                    airdata_controller.getTimeseriesValues(req.query,res)
                    break
                case 'getTimeseriesValueLayer':
                    airdata_controller.getTimeseriesValueLayer(req.query,res)
                    break
                default:
                    res.send("This type of query is not supported")
            }
        }    
        else {
            res.send("Unknown type of query")
        }
    }
    else {
        res.send("Haven't received any query, or essential parameters are blank")
    }
})

module.exports = router;
