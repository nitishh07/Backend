const express=require("express");
const path = require("path");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

//Views is used to show mesaages on flash
app.set("view engine","ejs");              
app.set("views", path.join(__dirname, "views"));

//EXPRESS SESSIONS
app.use(session({secret : "mysupersecretstring", resave : false, saveUninitialized : true}));

const sessionOptions = {
    secret : "mysupersecretstring",
    resave : false,
    saveUninitialized : true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    //Display name using ejs
    res.locals.successMsg= req.flash("success");
    res.locals.errorMsg= req.flash("error");  
    next();  
});


app.get("/register",(req,res)=>{
    let {name ="anonymous"} = req.query;
    req.session.name = name;

    if(name == "anonymous"){
    req.flash("error", "user not registered!");
    }else{
    req.flash("success", "user registered sucessfully!");
    }

    res.redirect("/hello");
});

app.get("/hello", (req,res)=>{
    // res.send(`hello ${req.session.name}`);
    res.render("page.ejs", {name : req.session.name }); //msg ek baar show krega
});


// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });

// app.get("/reqcount", (req,res)=>{ //client <--> server ke beech req count
//     if(req.session.count){   //this value exists count ++
//         req.session.count++;
//     }else{
//         req.session.count = 1; //else 1
//     }

//     res.send(`you send a request ${req.session.count} times`);
// });




























// //SIGNED COOKIE
// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","India", {signed : true});
//     res.send("signed cookie sent!");
// });


// //Verify Signed Cookies
// app.get("/verify", (req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });


// //COOKIES
// app.get("/greet",(req,res)=>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// });

// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("madeIn","India");
//     res.send("sent you some cookies!");
// })

// app.get("/", (req,res)=>{
//     console.dir(req.cookies);
//     res.send("Hi I am root");
// });


// //Using router 
// app.use("/users",users); //common cheez ko nikal liya
// app.use("/posts",posts);


app.listen(3000, ()=>{
    console.log("server is listening to 3000");
});