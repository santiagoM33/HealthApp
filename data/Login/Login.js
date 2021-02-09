import React, {useState} from 'react';
//import Localbase from 'localbase';
//Styles
import './Login.css';
//Componnents
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from '../../src/commons/Input/Input';
import {SpanError} from '../../src/commons/Span/Span';
import Btn from '../../src/commons/Button/Button';
import { Alert } from '../../src/commons/Div/Div';

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleChange = (name, value) => {
        if (name === 'usuario') {
                setUser(value)
                setHasError(false)
        } else {
            if (value.length < 4) {
                setPasswordError(true)
                setHasError(false)
            } else {
                setPasswordError(false)
                setPassword(value)
                setHasError(false)
            }
        }
    }

    //Validador de usuario y contraseña
    const ifMatch = param => {
        //let usuario= localStorage.getItem('account');
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'santiago' && param.password === 'monaco') {
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true)
            } else {
                setIsLogin(false)
                setHasError(true)
            }
        } else {
            setIsLogin(false)
            setHasError(true)
        }
    }

    //OnSubmit
    const handleClick = () => {
        let account = {user, password};
        if (account) {
            ifMatch(account);
        }
    }

    return ( 
        <main className='form-container'>
            {isLogin 
            ?   <div className='home-container'>
                    <h2>Hola {user}</h2>
                    <label>Felicidades, estas logueado. </label>
                </div>
            :   <div className='login-content'>
                <Title text='Bienvenido'/>
                {hasError &&
                    <Alert  
                        attribute= {{
                            id: 1,
                            text: 'Su contraseña o usuario no son correctos o no exise en nuestra base de datos'
                        }}
                    />
                }
                
                <Label text='Usuario'/>
                <Input 
                    attribute= {{
                        name: 'usuario',
                        placeholder: 'Ingrese su Usuario',
                        type: 'text',
                    }} 
                    handleChange={handleChange}
                />
                <Label text='Contraseña'/>
                <Input 
                    attribute= {{
                        name: 'password',
                        placeholder: 'Ingrese su Contraseña',
                        type: 'password',
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                { passwordError &&
                    <SpanError 
                        text='Contraseña invalida o incompleta' 
                    />
                }
                
                <Btn 
                    text='Ingresar'
                    handleClick={handleClick}
                />
            </div>
            }
        </main>
     );
}
 
export default Login;