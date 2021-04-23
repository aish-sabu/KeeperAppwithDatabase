import React , {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
const[isClicked, setClicked]= useState(false);
  function handleClick(event){
    return props.onDelete(props._id);
    event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
