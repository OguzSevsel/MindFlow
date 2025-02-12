import React from "react";
import NewButton from '../components/NewButton';

function Canvas({isMenuOpen}) {
    return (
        <div className={`Canvas ${isMenuOpen ? 'shifted' : ''}`}>
            <NewButton />
        </div>
    );
}


export default Canvas;