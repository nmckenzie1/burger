const mysql = require("mysql");

connection = mysql.createConnection({
    host: "localhost",
    user: "36CHAMBERS",
    password: "WUTANG",
    database:"burgers_db"

});
connection.connect(function(err){
    if (err) {
        console.error("SOME SHIZZZ HAPPENED" + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId)
});
module.exports = connection;