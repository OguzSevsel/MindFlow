import React, { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubMenu from "./SubMenu";

function MenuItem(props) {
    const [isExpanded, setIsExpanded] = useState(false); // State to track whether the item is expanded or collapsed

    const handleClick = () => {
        setIsExpanded(prevState => !prevState); // Toggle the state when button is clicked
    };

    return (
        <div className="MenuItem Menus">
            <div className="SideMenuButtonDiv Menus">
                <button onClick={handleClick} className="SideMenuButton Menus">
                    <div className="MenuItemIcon">
                        {isExpanded  ? <ExpandMoreIcon/> : <ChevronRightIcon/>}
                    </div>
                    <div className="MenuItemContent">
                        <span>{props.name}</span>
                    </div>
                </button>
            </div>
            
            <SubMenu isExpanded={isExpanded}/>
        </div>);
    
}

export default MenuItem;