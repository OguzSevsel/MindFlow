import React from 'react';

function DragButton({Icon, label, onClick, onMouseMove, onMouseDown, onMouseUp, className, isIconed, fontSize, color}) {
    return (

        <button onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseDown={onMouseDown} onClick={onClick} className= {`${className}`}>

        {isIconed ? <Icon sx={{fontSize: fontSize, color: color}} /> : label}
        
        </button>

      );
}

export default DragButton;