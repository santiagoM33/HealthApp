import React from 'react';
import './Title.css'

const Title = ({text}) => {
    return ( 
        <div className='title-container'>
            <label>{text}</label>
        </div>
     );
}
 
export default Title;