import React from 'react';

const styles = {
    description: {
        lineHeight: '1.3',
        color: '#9a9a9a'
    },
    privacy:{
        lineHeight: '1.3',
        color: '#b8b8b8'
    }
}

const P = ({children}) => {
    return ( 
        <p style={styles.description}>{children}</p>
     );
}
 
export default P;