import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import "./styles.css";

function NewButton() {
 
    return (
        <button className="NewButton">
            <AddIcon style={{fontSize: "36px" , color: "#d3d2d2"}}/>
        </button>
    );
}

export default NewButton;