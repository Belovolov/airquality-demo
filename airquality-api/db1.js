const mysql = require("mysql")
    
const db_prod = "airdata_1"
const db_test = "airdata_1"
    
exports.MODE_PROD = "mode_prod"
exports.MODE_TEST = "mode_test"

const state = {
    pool: null,
    mode: null
}    

exports.connect = function (mode, done) {
    state.pool = mysql.createPool({
        connectionLimit: 50,
    	host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    	user: process.env.DB_USER,
    	password: process.env.DB_PASSWORD,
        database: mode===exports.MODE_PROD ? db_prod : db_test
    })
    state.mode = mode
    let testConnection = state.pool.getConnection(function(err, connection) {
        if (err) done(err)
        else {
        	connection.release()
        	done(null)
        }
    })
}

exports.get = function () {
    return state.pool
}
