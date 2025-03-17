const express = require("express");
const app = express();
const port = 8080;

//Handling POST req
app.use(express.urlencoded({extended : true}));//to enocode url data
app.use(express.json()); //to encode json data


app.get("/register", (req, res)=>{
    let {user, password} = req.query; //get me string me hota hai
    res.send(`standard GET response.Welcome ${user}!`);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    let {user, password} = req.body; 
    res.send(`standard POST response.Welcome ${user}`);
    
});

app.listen(port , ()=>{
    console.log(`listening to port ${port}`);
});