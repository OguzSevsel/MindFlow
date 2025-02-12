import React from "react";
import "./styles.css";

function SideMenu({isMenuOpen}) {
    return (
      <div className={`SideMenu ${isMenuOpen ? "open" : ""}`}>
      <h3>Menu Items</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    );
    
}

export default SideMenu;