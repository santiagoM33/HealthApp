import React from 'react';

const styles = {
    title: {
        color: '#012151',
        fontSize: '2em',
        letterSpacing: '-1px'
    }
}

const H2 = ({children}) => {
    return (
        <h2 style={styles.title} className="text-center pb-1">{children}</h2>
    )
}

export default H2;