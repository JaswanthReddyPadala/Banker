var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jashu@123",
    database:"bankers"
});


// let createcustomerlist = "CREATE TABLE customers (customer_id INT AUTO_INCREMENT, customer_name VARCHAR(255), customer_balance INT, PRIMARY KEY(customer_id))";
//     con.query(createcustomerlist, function(err,result){
//         if (err) throw err;
//         console.log("Customer list table created");
//     });


// let createcustomerlist = "CREATE TABLE customers (customer_id INT AUTO_INCREMENT, customer_name VARCHAR(255), customer_balance INT, PRIMARY KEY(customer_id))";
//     con.query(createcustomerlist, function(err,result){
//         if (err) throw err;
//         console.log("Customer list table created");
//     });

// con.query(customer_listinsert,[values],function(err,result){
    //     if(err) throw err;
    //     console.log("Inserted into customerlist"+ result.affectedRows);
    // });

    // con.query("SELECT * FROM customers",function(err,result,fields){
    //     if(err) throw err;
    //     console.log(result);
    // });
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    let customer_listinsert = "INSERT INTO customers (customer_name, customer_balance, customer_email) VALUES ?";
    let values = [
        ["Jaswanth", 100000, "jr@gmail.com"],
        ["Reddy", 100000, "reddy@gmail.com"],
        ["Jaikar", 100000, "jaikar@gmail.com"],
        ["Bow", 100000, "bow@gmail.com"],
        ["Darling", 100000, "darling@gmail.com"],
        ["Aku", 100000, "aku@gmail.com"],
        ["Chicha", 100000, "chicha@gmail.com"],
        ["Paani", 100000, "paani@gmail.com"],
        ["Prinkoo", 100000, "prinkoo@gmail.com"],
        ["Chilaka", 100000, "chilaka@gmail.com"],

    ]
    let view = con.query("SELECT * FROM customers",function(err,result,fields){
        if(err) throw err;
        return result;
    });
    console.log(view);
     
});

function viewall(){
   
}