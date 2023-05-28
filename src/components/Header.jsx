import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

export default function Header(){
    return ( 
        <header> 
            <HighlightIcon className="invertColor" />
            <h1>Keeper</h1> 
        </header>
    )
}
