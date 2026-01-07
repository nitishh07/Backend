const express = require("express");
const router = express.Router();

//USERS
//Index users
router.get("/",(req,res)=>{
    res.send("GET for users");
});

//Show users
router.get("/:id",(req,res)=>{
    res.send("GET for user id");
});

//POST users
router.post("/",(req,res)=>{
    res.send("POST for user ");
});

//DELETE USERS
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});


module.exports = router;
