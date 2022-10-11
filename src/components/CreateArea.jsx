import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [ inputNote, setInputNote ] = React.useState({
        noteTitle: "",
        noteContent: ""
    });

    function handleInput(event) {
        const { name, value } = event.target;
        setInputNote( prevValue => {
            return {
            ...prevValue,
            [name]: value
            };
        });   
    }
    function SubmitNote(event) {
        props.onAdd(inputNote);
        setInputNote({
          noteTitle: "",
          noteContent: ""
        });
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input  
            onChange={handleInput} 
            value = {inputNote.noteTitle} 
            name="noteTitle" 
            placeholder="Title"
            autoComplete="off"
        />
        <textarea 
            onChange={handleInput} 
            value = {inputNote.noteContent}  
            name="noteContent" 
            placeholder="Take a note..." 
            rows="3" 
        />
        <button onClick={SubmitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
