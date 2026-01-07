const { faker } = require('@faker-js/faker');
// Get the client
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Nitish@1235'
  });



// Generate 1000 random users and insert them into the database
//Bulk me data generate hoga
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}



//HOME ROUTE
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
try{
  connection.query(q , (err , result)=>{
    if(err) throw err;
    let count = result[0]["COUNT(*)"];
    res.render("home.ejs" ,{count});
});
} catch(err){
  console.log(err);
  res.send("some error occurred");
}
});





//SHOW ROUTE
app.get("/user", (req,res)=>{
  let q = `SELECT * FROM user`;

  try{
    connection.query(q , (err , users)=>{
      if(err) throw err;
      res.render("show.ejs", {users});
  });
  } catch(err){
    console.log(err);
    res.send("some error occurred");
  }
  });


//Edit Route
app.get("/user/:id/edit", (req,res)=>{
     let {id} = req.params;
     let q = `SELECT * FROM user WHERE id = '${id}'`; 
   
     try{
      connection.query(q , (err , result)=>{
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs" , {user});
    });
    } catch(err){
      console.log(err);
      res.send("some error occurred");
    }
});


//UPDATE ROUTE
app.patch("/user/:id", (req,res)=>{
    let {id} = req.params;
    let {password: formPass, username : newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`; 
    try{
      connection.query(q , (err , result)=>{
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password){
          res.send("WRONG PASSWORD");
        } else{
          let q2 =`Update user SET username='${newUsername}' WHERE id='${id}'`; 
          connection.query(q2 , (err , result)=>{
            if(err) throw err; 
            res.redirect("/user");
        });
    }
  });
    } catch(err){
      console.log(err);
      res.send("some error occurred");
    }
});



app.listen("8080", ()=>{
console.log("Server is running on port 8080");
})



//INSERT DATA INTO TABLE
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }


// let users = [ 
// ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
// ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// 



// Execute a query
// try{
//   connection.query(q , [data], (err , result)=>{
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
// });
// } catch(err){
//   console.log(err);
// }

//END CONNECTION
// connection.end();