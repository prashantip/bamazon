var mysql = require("mysql");
var inquirer = require("inquirer");
//require("console.table");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  //  console.log("connected as id " + connection.threadId);
  //  display()
});
 // connection.connect();
 
  function start(){
    
    connection.query("SELECT * FROM products", function(err,res){
      
      if (err) throw err;
      console.log("Bamazon");
     console.table(res);
      
    console.log("Product ID", "Product Name", "Department Name","Price", "Quantity");
    var table = new Table({
    head: ["ID", "Product Name", "Department", "Price", "Stock"],
    colWidths: [5, 25, 25, 8, 5]
});
//      for(var i=0; i<res.length; i++){
   
//    console.log([res[i].itemId, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quanity]);
//      //console.log ("-------------------------------");
// } 

 //display table
 //  console.log(table.toString());

    inquirer.prompt([{
    name: "id",
    type: "input",
    message: "what is the ID of the product you would like to buy? ",
    validate: function(value) {
      if (isNaN(value) == false) {
          return true
      } else {
          return false;
      }
       }

       }, 
    {
      name: "quantity",
      type: "input",
      message: "how many would you like to buy? ",
      validate: function(value) {
        if (isNaN(value) == false) {
            return true
        } else {
            return false;
        }
     } 
   }
      ]).then(function(answer){  
      var quantity = answer.quantity;
      var itemId = answer.id;    
       connection.query("SELECT * FROM products WHERE ?",[{id: itemId}],function(err,selectedItem){
         if(err)throw err;
         if(selectedItem[0].stock_quantity - quantity>=0){

          var orderTotal = quantity * selectedItem[0].price;

          console.log("We have enough (" + selectedItem[0].product_name + ")!");
          console.log("Quantity in stock: " + selectedItem[0].stock_quantity + " Order quantity: " + quantity);
          console.log("You will be charged $" + orderTotal + ". Thank you!");

          connection.query('UPDATE products SET stock_quantity=? WHERE id=?', [selectedItem[0].stock_quantity - quantity, itemId],
                        function(err, inventory) {
                            if (err) throw err;
                             orderAgain();
                          })
               } else {
                            console.log('Insufficient quantity.  Please adjust your order, we only have ' + selectedItem[0].stock_quantity + ' ' + selectedItem[0].product_name + 'in stock.');
                          orderAgain();
                       }
                      });
                    });

          }); //query
        
        } //start function
          
        function orderAgain() {
           inquirer.prompt([{
           name: "orderAgain",
           type: "list",
          message: "Do you want to order again?",
          choices: ["Yes","No"]
           }]).then(function(answer){
               if (answer.orderAgain === "Yes") {
      
                  start();
               }  else {
                   console.log("Thank You");
                   connection.end();
               }
      
           })
      }  

      start()
     
      
  

