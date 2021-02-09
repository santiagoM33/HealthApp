import React from 'react';

const Label = ({text}) => {
    return ( 
        <div>
            {text}
        </div>
     );
}

export const LabelAlert = ({text}) => {
    return ( 
        <div className='label-alert'>
            {text}
        </div>
     );
}
 
export default Label;