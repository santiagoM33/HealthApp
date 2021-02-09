import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return ( 
        <div className="text-center m-5">
            <div className="spinner-border text-info spinner-size" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
     );
}
 
export default Spinner;