import React from 'react';
import './Button.css';

const Btn = ({text, handleClick, btn, type}) => {
    return ( 
        <div>
            <button
                type={type}
                onClick={handleClick}
                className={btn}
            >
            {text}</button>
        </div>
     );
}
 
export default Btn;