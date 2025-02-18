import React from 'react';

function Button({Icon, label, onClick, className, isIconed, fontSize, color}) {
    return (

        <button onClick={onClick} className= {`${className}`}>

        {isIconed ? <Icon sx={{fontSize: fontSize, color: color}} /> : label}
        
        </button>

      );
}

export default Button;