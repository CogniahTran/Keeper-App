import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [Notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes(prevNote  => {
           return [...prevNote, newNote]
        });
    }
    function deleteNote(id){
        setNotes((prevNote)  => {
            return prevNote.filter((noteItem, index)=> { 
               return index !== id;
             });  
           });
    }
    return (
      <div>
        <Header />
        <CreateArea onAdd = {addNote} />
        {Notes.map((noteItem, index) => {
            return <Note 
                key = {index}
                id = {index}
                title = {noteItem.noteTitle}
                content={noteItem.noteContent}
                onChecked = {deleteNote}
            />
        })}
        <Footer />
      </div>
    );
  }
  
  export default App;