import React from "react";
import MenuItem from "./MenuItem";

function SideMenu({isMenuOpen}) {
    return (
      <div className={`SideMenu Menus ${isMenuOpen ? "open" : "close"} ScrollBar`}>
        <MenuItem name="Maps"/>
        <MenuItem name="Subjects"/>
        <MenuItem name="Topics"/>
        <MenuItem name="Notes"/>

    </div>
    );
    
}

export default SideMenu;