const express = require('express');
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})


//changed method from "GET" to "POST"
signupRouter.post("/adduser",function(req,res){
    
    //changed how data is extracted from the request object
    //was using the deprecated 'param' method before, now using 'req.body.uid' (and 'pwd') to extract data from the request object
    //added an 'id' for newuser so as to maintain consistency

    var newuser = {
        "id":user.length+1,
        "uid":req.body.uid, 
        "pwd":req.body.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;