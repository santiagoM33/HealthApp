import React from 'react';
import './Span.css';


const Span = ({text}) => {
    return ( 
        <>
            <span className='msg-default'>
                {text}
            </span>
        </>
     );
}

export const SpanSuccess = ({text}) => {
    return ( 
        <>
            <span className='msg-success'>
                {text}
            </span>
        </>
     );
}

export const SpanError = ({text}) => {
    return ( 
        <>
            <span className='msg-error'>
                {text}
            </span>
        </>
     );
}

export const CloseBtn = () => {  
    return ( 
        <>
            <span
                className='closebtn mt-4'
            >
            &times;</span>
        </>
     );
}
 
export default Span;