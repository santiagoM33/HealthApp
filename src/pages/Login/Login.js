import React, {useState} from 'react';
//---------Registro de Cookies----------
import Cookies from 'universal-cookie';
//--------------Funciones de la BD---------------
import {getData} from '../../services/dbHelpers';
//--------------Estilos del Login-------------
import './Login.css';
//------------Componentes del Login------------
import Header from '../../components/Header';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
//-----------Componentes Generales-------------
import Input from '../../commons/Input/Input';
import {SpanError} from '../../commons/Span/Span';
import Btn from '../../commons/Button/Button';
import { Alert } from '../../commons/Div/Div';
//-----------Componentes Res Login-------------
//import RegSuccess from '../RegisterSuccess/RegisterSuccess';
//import ConfirmLogin from '../../components/UserConfMail';
//import Spinner from '../../components/spinner/Spinner';

const Login = () => {
    //Instance Cookies
    const cookies = new Cookies();
    /*--------------------------------------- */
    /*    |||||       ESTADOS      |||||      */
    /*--------------------------------------- */
    const [user, setUser] = useState('');
    /*---------------EMAIL--------------*/
    const [email, setEmail] = useState('');
    /*---------------PASSWORD--------------*/
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    /*---------------LOGIN--------------*/
    //const [isLogin, setIsLogin] = useState(false);
    /*---------------ERRORES--------------*/
    const [hasError, setHasError] = useState(false);
    //const [isLoading, setIsLoading] = useState(false);

    //Es como un [e.target.name]: e.target.value
    const handleChange = (name, value) => {
        if (name === 'email') {
                setEmail(value)
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

    //Trae de la BD el usuario que comple con la condicion pasada
    const getUserByEmail = async email => {
        try{
            const users = await getData('users');
            const dataEmail = users.find(data => data.email === email);
            return dataEmail;
        }catch(err){
            console.log('No existe el email en la bd')
        }
    }
    
    //Data from input onChange
    let data = {
        user: user,
        email: email,
        password: password
    }

//OnSubmit - captura los datos en param  al hacer click 
//Trae los datos de la bd y los compara con los del state data
   const handleClick = () => {
        getUserByEmail(data.email)
        .then(res => { return res})
        .then(obj => {
            if (data.email.length > 0 && data.password.length > 0) {
                if (data.email === obj.email && data.password === obj.password) {
                    setUser(obj.user)
                    let respuesta = obj;
                        cookies.set('id', respuesta.id, {path: "/"})
                        cookies.set('user', respuesta.user, {path: "/"})
                        cookies.set('email', respuesta.email, {path: "/"})
                        cookies.set('phone', respuesta.phone, {path: "/"})
                        cookies.set('code', respuesta.code, {path: "/"})
                        
                        window.location.href='/Welcome';

                    //setIsLogin(true)
                } else {
                    //setIsLogin(false)
                    setHasError(true)
                }
            } else {
                //setIsLogin(false)
                setHasError(true)
            }  
        })
        .catch(e => {
            console.log('El email no existe', e)
            console.log('ERROR: ', e)
        })
    }
    

    return ( 
        <main className='container'> 
            <div className='login-content'>
                <Header src='./images/logo/USHEALTH2.jpeg' />
                <Title text='Welcome Back'/>
                {hasError &&
                    <Alert  
                        attribute= {{
                            id: 1,
                            text: 'Su contraseña o email no son correctos y/o no existen en nuestra base de datos'
                        }}
                    />
                }
                
                <Label text='Email'/>
                <Input 
                    attribute= {{
                        name: 'email',
                        placeholder: 'Ingrese su Email',
                        type: 'email',
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
                    text='Login'
                    handleClick={handleClick}
                    btn='btn bg-danger text-light'
                />
            </div>
        </main>
     );
}
 
export default Login;