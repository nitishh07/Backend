const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//CREATING ARRAY TO STORE POST DATA
let posts = [{
    id : uuidv4(),
    username : "apnacollege",
    content : "I love coding!"
},
{
    id : uuidv4(),
    username : "Shradha",
    content : "Hard work is important!"  
},
{
    id : uuidv4(),
    username : "Nitish",
    content : "I got my placement!"
}];

//GET POSTS
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts})
});

//TO GET NEW FORM
app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

//NOW TO ADD THIS NEW FORM USING POST REQ
app.post("/posts", (req, res)=>{
    let {username , content} = req.body;
    let id = uuidv4(); 
    posts.push({id , username , content});  //adding new posts 
    res.redirect("/posts");
});

//GET POST ID 
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    //Finding Post on basis of Id
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});


//Update Route
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content =newContent;
    console.log(post);
    res.send("patch request working!");
})
app.listen(port , ()=>{
    console.log("listening to port : 8080");
});