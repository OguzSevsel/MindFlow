import React from "react";
import MenuItem from "./MenuItem";
import "./styles.css";

function SideMenu({isMenuOpen}) {
    return (
      <div className={`SideMenu ${isMenuOpen ? "open" : ""} ScrollBar`}>
        <MenuItem name="Maps"/>
        <MenuItem name="Subjects"/>
        <MenuItem name="Topics"/>
        <MenuItem name="Notes"/>

    </div>
    );
    
}

export default SideMenu;