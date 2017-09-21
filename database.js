/**
 * Created by Sk on 8/24/2017.
 */
require('./server');
var mysql=require('mysql');
//mysql connection
var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database : "inventory"
});
module.exports= con;