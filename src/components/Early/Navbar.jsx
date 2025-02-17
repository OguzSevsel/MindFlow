import React, {useState} from "react";
import MenuButton from "./MenuButton";
import AccountButton from "./AccountButton";

function NavBar({toggleMenu}) {

    return (
        
        <div className="NavBar">

            <MenuButton onClick={toggleMenu}/>

            <h2 className="Title">Maps/Subjects/Topics/Notes</h2>

            <AccountButton />
                
        </div>
    );
}

export default NavBar;