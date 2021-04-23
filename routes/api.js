const mongoose= require ("mongoose");
const express = require ("express");
const Post = require ("../models/post")

const router = express.Router();
//Routes
router.get("/",function(req,res){
    Post.find({})
  .then(data=>{
    console.log("Data: ", data);
    res.send(data);
  })
  .catch(error=>{
    console.log(error);
  });

});

router.post("/save", function(req,res){
  console.log("Data: ", req.body);
  res.send("Data received by the server");
  const data= req.body;
  const newPost= new Post({
    title: data.title,
    body: data.content
  });
  newPost.save()
});

router.post("/delete", function(req,res){
  console.log("delete: ", req.body);
})

router.get("/name",function(req,res){
  const data={
    username: "sona",
    age: 10
  }
  res.json(data);
});


module.exports= router;
