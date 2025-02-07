import React from 'react';

function Button({ onClick, children, type = "button", disabled = false }) {
    return (
        <button onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
}


export default Button;