const connection = require("../config/connection")
function createQmarks(num){
    let arr = [];
    for (let index = 0; index < num; index++) {
        arr.push("?")
        
    }return arr.toString();
}
function translateSql(obj) {
    let arr = [];
    for (var key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)){
        if(typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'"
        }
        arr.push(key + "=" + value)
    }
        
    }
}
let orm = {
    selectAll: function(table, cb){
        let queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },
    insertOne: function(table, cols, values, cb){
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ")" + " VALUES (" + createQmarks(vals.length) +
        ") ";
        console.log(queryString)
        connection.query(queryString, values, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })

    },
    updateOne: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table + " SET " + 
        translateSql(objColVals) +
        " WHERE " + condition;
        console.log(queryString)
        connection.query(queryString, values, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },
    deleteOne: function(table, condition, cb){
        let queryString = "DELETE FROM " + table + " WHERE " + condition;
        console.log(queryString)
        connection.query(queryString, values, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    }
}
module.exports = orm