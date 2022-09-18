const express = require("express")
const bodyParser = require("body-parser")
const db0 = require('./db0.js')
const db1 = require('./db1.js')
const app = express()
const cors = require('cors')
const kiwis = require('./routes/kiwis.js')

app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine","ejs")

app.use('/KiWIS/KiWIS', cors(), kiwis);

app.get("*", cors(), function(req,res) {
    res.status(404).send('Sorry, the page is not found... What are you doing with your life?')
})

db1.connect(db0.MODE_TEST, (err) => {if (err) console.log("Error connecting to datasource 0")})
db0.connect(db1.MODE_TEST, function(err) {
	if (err) {
		console.log("Error connecting to datasource 1: " + err)
	}
	else {
		app.listen(3000, function() {
			console.log("Server started..")
		})
	}
})

module.exports = app;