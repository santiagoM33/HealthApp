import React from 'react';

const UserConfirmEmail = ({src, text, btn, handleLogin}) => ( 
    <div className="container">
        <div className="row">
            <h3 className="col-12">Thank you! Please check your email.</h3>
            <img src={src} style={{'width': '50%'}} alt="Avatar Confirmation" className="img-fluid mx-auto"/>
            <p className="col-12">Please check your email account for a confirmation email. Once verified we can provide you with a quote and connect you with an agent.</p>
        </div>      
       
        <button 
            className={btn}
            onClick={handleLogin}
        >
        {text}</button>
    </div>
 );

 
export default UserConfirmEmail;