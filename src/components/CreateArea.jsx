import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props) {

    const [note, setNote] = useState({
        "title": "",
        "content": ""
    })

    const [createNote, setTakingNote] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevValues) => {
            return {
                ...prevValues,
                [name] : value
            }
        })
    }

    function takeNote(){
        setTakingNote(true);
    }

    return (
        <div>
            <form className="create-note">
                {createNote && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
                <textarea onClick={takeNote} onChange={handleChange} name="content" placeholder="Take a note..." rows={createNote ? "3" : "1"} value={note.content} />
                {createNote && <Zoom in={true}>
                    <Fab aria-label="add" onClick={ (event) => {  
                        props.addNote( {"title": note.title, "content": note.content}, event ); setNote({"title" : "", "content": ""}); setTakingNote(false)
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>}
            </form>
        </div>
    );
}