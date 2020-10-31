const mysql = require("mysql");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{

connection = mysql.createConnection({
    host: "localhost",
    user: "36CHAMBERS",
    password: "WUTANG",
    database:"burgers_db"

});
}
connection.connect();
module.exports = connection;