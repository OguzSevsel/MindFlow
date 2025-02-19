import React from 'react';

function DragButton({Icon, label, onClick, onMouseMove, onMouseDown, onMouseUp, className, isIcon, fontSize, color}) {
    return (

        <button onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseDown={onMouseDown} onClick={onClick} className= {`${className}`}>

        {isIcon ? <Icon sx={{fontSize: fontSize, color: color}} /> : label}
        
        </button>

      );
}

export default DragButton;