import React , {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";

function App(){
const [notes, setNotes]= useState([]);
const [posts, setPosts]= useState([]);

useEffect(()=>{
  axios.get('/api')
  .then((response)=>{
    const data= response.data;
    console.log(data);
    setPosts(data);
    console.log("Posts: ",posts);
    console.log("Data has been received!");
  })
  .catch(()=>{
    alert("Some Error");
  });
},[]);

function addItem(note){
  setNotes(prevValue=>{
    return [...prevValue,note];
  });
      const payload={
        title: note.title,
        content: note.content
      }
      console.log(payload);

    axios({
      url: "api/save",
      method: "POST",
      data: payload
    })
    .then(()=>{
      console.log("Data has been sent to the server!");
    })
    .catch(()=>{
      console.log("Internal server error");
    });
}

 function deleteItem(_id){
  setNotes(prevValue=>{
    return prevValue.filter((note, index)=>{
      return index!==_id;


    })
  })
}

function displayBlogPost(posts){
  if(!posts.length){return null}

  return (posts.map((post,index)=>{
    return <div className="note" key={index}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deleteItem}><DeleteIcon /></button>
    </div>
  }))

}

  return (<div>
    <Header />
    <CreateArea
    onAdd={addItem}
     />
     {notes.map((note, index)=>{
       return <Note key={index} id={index} onDelete={deleteItem} title={note.title} content={note.content} />
     })}

     {displayBlogPost(posts)}

    <Footer />
    </div>
  );
}

export default App;
