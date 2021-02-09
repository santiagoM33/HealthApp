import React from 'react';
//import Logo from '../../public/us_health_logo_v2'

const Header = ({title, src}) => {
    return (
        <header className="container">
            <div className="navbar">
                <div className="navbar-brand">
                    {src 
                        ? <img src={src} style={{'width': '100%'}} alt="Logo USHEALTH"/>
                        : <h2 className="h1">{title}</h2>
                    }
                </div>
            </div>
        </header>
        
    )
}

export default Header;