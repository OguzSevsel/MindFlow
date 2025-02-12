import React, {useState} from "react";
import NavBar from "../components/Navbar";
import Canvas from "../components/Canvas";
import SideMenu from "../components/SideMenu";

function CanvasContainer() {

    const [isMenuOpen, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!isMenuOpen);
    }
    
    return (
        <div className="AllContainer">
            <NavBar toggleMenu={toggleMenu} />
            <div className="CanvasContainer">
                <Canvas isMenuOpen={isMenuOpen} />
                <SideMenu isMenuOpen={isMenuOpen} />
            </div>
        </div>
    )
}

export default CanvasContainer;