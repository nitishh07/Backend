const express = require("express");
const app = express();
const port = 8080;

const path = require ("path");

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [{
    id : uuidv4(),
    username : 'Shradha',
    content : 'I love Coding'
},{
    id : uuidv4(),
    username : 'Nitish',
    content : 'I love Coding too'
},{
    id : uuidv4(),
    username : 'Pihu',
    content : 'I love Coding too'
}];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    let {username , content} = req.body;
    let newId = uuidv4();
    posts.push({newId , username , content});
    res.redirect("/posts");         
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((post) => id == post.id);
    console.log(post);
    res.render("show.ejs", {post});
});
  
app.listen(port , ()=>{
    console.log(`listening to port ${port}`);
});


