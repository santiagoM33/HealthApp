import React, {Fragment} from 'react';
import Header from '../../components/Header';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

const Welcome = () => {
   const handleClick = () => {
        cookies.remove('id: ', {path: '/'});
        cookies.remove('user: ', {path: '/'});
        cookies.remove('email: ', {path: '/'});
        cookies.remove('phone: ', {path: '/'});
        cookies.remove('code: ', {path: '/'});
        window.location.href = './'
    }
    return ( 
        <Fragment>
            <Header src='./images/logo/USHEALTH_HeaderLog.png' />
            <main>
                <h2>Logueado</h2>
                <button 
                    className='btn btn-secondary btn-block'
                    onClick={handleClick}
                >
                Logout</button>
            </main>
           
        </Fragment>
        
     );
}
 
export default Welcome;