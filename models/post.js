const mongoose= require("mongoose");

const Schema = mongoose.Schema;
const postSchema= new Schema({
  title: String,
  body: String,
  date:{
    type: String,
    default: Date.now()
  }
});

const Post= mongoose.model("Post", postSchema );
const data= {
  title: "Hello",
  body: "Ash"
}

// const data1= new Post(data);
// data1.save(error =>{
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log("Data is saved.");
//   }
// });

module.exports= Post;
