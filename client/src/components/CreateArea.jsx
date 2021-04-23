import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote]= useState({
    title: "",
    content: ""
  });
const [isExpanded, setExpanded]= useState(false);
  function handleChange(event){
    const {name:inputName, value:newValue}= event.target;
    setNote(prevValue=>{
      return{
        ...prevValue,
        [inputName]:newValue
      }
    })
  }

  function addNote(event){
props.onAdd(note)
  event.preventDefault();
  setNote({title: "", content: ""});
  }
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea
        onChange={handleChange}
        onClick={expand}
        name="content" placeholder="Take a note..."
        rows={isExpanded ? "3" : "1"}
        value={note.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={addNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
