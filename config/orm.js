const connection = require("../config/connection")
function createQmarks(num){
    let arr = [];
    for (let index = 0; index < num; index++) {
        arr.push("?")
        
    }return arr.toString();
}
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
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
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) +
        ") ";
        console.log(queryString)
        connection.query(queryString, vals, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })

    },
    updateOne: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table + " SET " + 
        objToSql(objColVals) +
        " WHERE " + condition;
        console.log("objcolvals is " + objToSql(objColVals))
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },
    deleteOne: function(table, condition, cb){
        let queryString = "DELETE FROM " + table + " WHERE " + condition;
        console.log(queryString)
        connection.query(queryString, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    }
}
module.exports = orm