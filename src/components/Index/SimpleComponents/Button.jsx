import React from 'react';

function Button({Icon, label, onClick, className, isIconed}) {
    return (
        <button onClick={onClick} className= {`${className}`}>

        {isIconed ? <Icon /> : label}
        
        </button>
      );
}

export default Button;