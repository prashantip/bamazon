var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon_db"
});


connection.connect(function(err) {
  if (err) throw err;
    console.error("connected as id " + connection.threadId);
    display()
});
 // connection.connect();
 
// console.log("hi");
  function display(){
    
    connection.query("SELECT * FROM products", function(err,res){
      
      if (err) throw err;
     // console.log(res);
      console.log("Bamazon");
      console.log("Product ID", "Product Name", "Department Name","Price", "Quantity");
      // var table = new table({
      //  head: ["Product ID", "Product Name", "Department Name","Price", "Quantity"],
      //  colWidths: [10, 25, 25,10, 15]
    //});
    for(var i=0; i<res.length; i++){
    //  table.push
    console.log([res[i].id, res[i].product_name, res[i].department_name, res[i].price, res[i].quantity]);
  
}  
//console.log (table.toString());

 });    
//display()
 } 
