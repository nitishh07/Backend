const express = require("express"); //express internally ejs ko require kr lega
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/css"))); //bahar se bhi run krega sirf usi folder me jane ka zarroat ni
app.use(express.static(path.join(__dirname,"/public/js")));


//APP.SET (VIEW ENGINE->WO PACKAGE JO HAMARE TEMPLATES KO BANANE ME KAAM AAEGA)
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req , res)=>{
    let diceVal = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs", {num: diceVal});
});

//Instagram EJS

app.get("/ig/:username", (req,res)=>{
    // const followers = ["tony" , "steve", "chris", "natasha"];
    //   let {username} = req.params;
    //   res.render("instagram.ejs", {username , followers});
    let {username} = req.params;   //sirf username chahiye to usko ek variable me store krwa diya
    const instaData = require("./data.json");  //data base se jitna data aaya haia usko ek jagah store krwa diya
    console.log(instaData);
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data});  //accessing only username from instaData
    } else{
        res.render("error.ejs");
    }
    
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});
