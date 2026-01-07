const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


app.use(express.urlencoded({ extended : true}));
app.use(methodOverride('_method'));
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
    let {username , content} = req.body;   //user aur content nikal liya 
    let id = uuidv4();     //creating new id for new post
    posts.push({id , username , content});  //adding new posts (push kr diye)
    res.redirect("/posts");
});

//GET POST ID 
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    //Finding Post on basis of Id
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});


//Update Route (Patch)
app.patch("/posts/:id", (req,res)=>{
    let {id} = req.params;          //id nikal liye jisko update krna hai
    let newContent = req.body.content;   //content ko update krna hai to content nikal liya yha se

    //post ko update kr rhe hai
    let post = posts.find((p) => id === p.id);
    post.content =newContent;
    console.log(post);
    res.redirect("/posts");   //redirect kr diya posts pr
})


//EDIT ROUTE

app.get("/posts/:id/edit", (req,res)=>{
    let {id} = req.params;          //id nikal liye jisko update krna hai
    let post = posts.find((p) => id === p.id);   //post ko dhoond liya
    res.render("edit.ejs", {post});   //edit page pr bhej diya

});

app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);  //filter kr dega wo sb post kko jiska id same ni h baki se ya ye wla post ka id se
    res.redirect("/posts");
});

app.listen(port , ()=>{
    console.log("listening to port : 8080");
});