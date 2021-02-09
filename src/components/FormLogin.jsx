import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AdviserData from './Adviser';

    const FormLogin = ({newRegistro}) => {

        const [registro, setRegistro] = useState({
            name: '',
            code: '',
            phone: '',
            email: ''
        })

        const handleChange = e => {
            setRegistro({
                ...registro,
                [e.target.name] : e.target.value
            })
        }

        const {name, code, phone, email} = registro;

        const handleSubmit = e => {
            e.preventDefault();

            //Comprobar campos

            newRegistro(registro)

            registro.id= uuidv4();
        }

        return ( 
            <Fragment>
                <form onSubmit={handleSubmit} className="ed-grid">
                    <input
                        className="full"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={name}
                    />
                    <input
                        className="full"
                        type="text"
                        name="code" 
                        placeholder="Zip Code"
                        onChange={handleChange}
                        value={code}
                    />
                    <input
                        className="full"
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        value={phone}

                    />
                    <input 
                        className="full"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                    />
                    <button 
                        className="button s-radius s-border btn-bg-color text-color-alt"
                        
                    >
                    SUBMIT</button>
                    <button 
                        className="btn default s-radius s-border"
                    >
                    CANCEL</button>
                </form>
                <AdviserData />
            </Fragment> 
         );
    }
     
    export default FormLogin;