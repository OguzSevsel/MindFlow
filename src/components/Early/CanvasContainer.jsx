import React, {useState} from "react";
import NavBar from "./Navbar";
import Canvas from "./Canvas";
import SideMenu from "./SideMenu";

function CanvasContainer() {

    const [isMenuOpen, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!isMenuOpen);
    }
    
    return (
        <div className="AllContainer">
            <NavBar toggleMenu={toggleMenu} />
            <div className={`CanvasContainer ${isMenuOpen ? "SideMenuOpened" : "SideMenuClosed"}`}>
                <Canvas isMenuOpen={isMenuOpen} />
                <SideMenu isMenuOpen={isMenuOpen} />
            </div>
        </div>
    )
}

export default CanvasContainer;