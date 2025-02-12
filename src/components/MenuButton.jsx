import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

function MenuButton({ onClick }) {
    return (
        <button onClick={onClick} className="Button MenuButton">
            <MenuIcon style={{ fontSize: "36px", color: "#d3d2d2" }} />
        </button>
    );
}

export default MenuButton;