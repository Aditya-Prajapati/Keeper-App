import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes.js";
import CreateArea from "./CreateArea";

export default function App(){

    const [notes, setNotes] = useState([{"title": "Welcome to Keeper", content: "Click on 'Take a note...' and press + icon to add note."}]);

    function addNote(note, event){
        setNotes((prevValues) => {
            return [...prevValues, note];
        })

        event.preventDefault();
    }

    function deleteNote(id){
        setNotes((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (

        <div>
            <Header />
            <CreateArea addNote={addNote} />
    
            {notes.map( (note, index) => 
                <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
            )}
    
            <Footer />
        </div>
    );
}

