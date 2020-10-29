const connection = require("../config/connection")

let orm = {
    selectAll: function(whaToSelect, table, cb){
        let queryString = "SELECT ?? FROM ??";

        connection.query(queryString, [whatToSelect, table], function(err, res){
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