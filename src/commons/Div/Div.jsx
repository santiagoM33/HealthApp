import React from 'react';
import './Div.css'
import {CloseBtn} from '../Span/Span'

const Default = () => {
    return ( 
        <div className='default'>
            <CloseBtn />
        </div>
     );
}

export const Alert = ({attribute}) => {
    return ( 
        <div 
            className='alert'
        >
            <CloseBtn />
            {attribute.text}
        </div>
     );
}
 
export default Default;