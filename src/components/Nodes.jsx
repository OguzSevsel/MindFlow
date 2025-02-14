import { Translate } from "@mui/icons-material";
import React from "react";


function Node (props) {
    return (
        <div
        key= {props.id}
        style={{
            position: "absolute",
            backgroundColor: "white",
            width: "100px",
            height: "100px",
            left: props.left,
            top: props.top,
        }}
        className= {`Nodes ${props.isMenuOpen ? "NodeOpen" : ""}`}
        >
            {props.content}
        </div>
    );
}

export default Node;