const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
});

//ROUTING ->differnt route ke liye diff response hoga
app.get("/", (req , res)=>{
    res.send("hello i am root! ");
});

// app.get("/apple", (req , res)=>{
//     res.send("you contaced apple path!");
// });

// app.get("/orange", (req , res)=>{
//     res.send("you contaced orange path!");
// });

//Kuch aur route me kuch print ho error ni aaye
// app.get("*", (req,res)=>{
//     res.send("this path does not exist!");
// });

// app.post("/", (req , res)=>{
//     res.send("you sent a post request to root!");
// });



//APP.USE() & RES.SEND() ->To send and accept request

app.use((req,res)=>{
    // console.log(req);
    console.log("request recieved");
    // res.send("this is a basic response");
    // res.send({
    //     name : "apple",
    //     color : "red",
    // });

    let code ="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
    res.send(code);
});



//PATH PARAMETERS  ->sending variables baar baar route to ni bhej paega to variable ka naam type kr denge 

// app.get("/:username", (req , res)=>{
//     console.log(req.params);
//     res.send("hello i am root! ");
// });


// app.get("/:username/:id", (req,res)=>{
//     let{ username , id} = req.params;
//     let htmlStr = `<h1>welcome to the page of @${username}<\h1>`;
//     res.send(htmlStr);
// });


//QUERY STRING

// app.get("/search", (req,res)=>{
//     console.log(req.query);
//     res.send("no result");
// });

// app.get("/search", (req,res)=>{
//     let {q} = req.query;
//     if(!q){
//     res.send("nothing found!");
//     }
//     res.send(`<h1>search results for query : ${q}</h1> `);
// });

