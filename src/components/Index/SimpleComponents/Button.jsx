import React from 'react';

function Button({Icon, label, onClick, className, isIcon, fontSize, color}) {
    return (

        <button onClick={onClick} className= {`${className}`}>

        {isIcon ? <Icon sx={{fontSize: fontSize, color: color}} /> : label}
        
        </button>

      );
}

export default Button;