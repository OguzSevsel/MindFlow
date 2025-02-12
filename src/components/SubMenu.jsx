import React from "react";


function SubMenu({isExpanded}) {
    return (
        <div className={`SubMenu ${isExpanded ? "Expanded" : ""}`}>
            <h1 style={{color: "white"}}>Item1</h1>
            <h1 style={{color: "white"}}>Item2</h1>
            <h1 style={{color: "white"}}>Item3</h1>
        </div>
    )
}

export default SubMenu;