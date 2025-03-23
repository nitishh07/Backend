const express = require("express");
const app = express();

const path = require("path");

//Server Listening
let port = 8080;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// });

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// //Request Recieved
// app.use((req, res) =>{
//     console.log("request received");

//     //Response Send
//     res.send({                      
//         name : "apple",
//         color: "red",
//     });
// });

// app.get("/apple",(req,res)=>{
//     res.send("apple is the path");
// });

// app.get("/:username",(req,res)=>{
//     res.send(`Hello ${req.params.username}`);
// });

app.get("/ig/:username",(req,res)=>{
    const followers = ["adam","bob","charlie"];
    let {username} = req.params;
    res.render("instagram.ejs",{username , followers});
});