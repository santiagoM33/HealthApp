import React, {Fragment, useState} from 'react';
//---------ID y Password aleatoriamente----------
import { v4 as uuidv4 } from 'uuid';
import generator from 'generate-password';
//--------------Funciones de la BD---------------
import setData from '../../services/dbHelpers';
//--------------Manejo de EmailJS----------------
import emailjs from 'emailjs-com';
//------------Componentes del Register------------
import Header from '../../components/Header';
import HeadLog from '../../components/HeadLog';
import Adviser from '../../components/Adviser';
//-----------Componentes Generales-------------
import Input from '../../commons/Input/Input';
import Button from '../../commons/Button/Button';
import { Alert } from '../../commons/Div/Div';
import { SpanError } from '../../commons/Span/Span';
//--------Componentes de registro exitoso--------
import ConfirmLogin from '../../components/UserConfMail';


const Register = () => {
    /*--------------------------------------- */
    /*    |||||       ESTADOS      |||||      */
    /*--------------------------------------- */
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState(false);
    /*-------------ZIP CODE---------------*/
    const [code, setCode] = useState(0);
    const [codeError, setCodeError] = useState(false);
    /*--------------PHONE-----------------*/
    const [phone, setPhone] = useState(0);
    const [phoneError, setPhoneError] = useState(false);
    /*---------------EMAIL--------------*/
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    /*------------VALIDADORES GENERALES-------- */
    const [hasError, setHasError] = useState(false);
    //const [isRepeat, setIsRepeat] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    /*------------DATOS USUARIO------------ */
    //const [name, setName] = useState('')


    //Valida que cada campo cumpla con un criterio determinado
    const handleChange = (name,value) => {
        setHasError(false);
        switch(name) {
            case 'user':
                if (value.length < 4 ){
                    setUserError(true)
                } else {
                    setUserError(false)
                }
                setUser(value)
                break;
            case 'zipcode':
                if (value.length > 5  ){
                    setCodeError(true)
                } else {
                    setCodeError(false)
                }
                setCode(value)
                break;
            case 'phone':
                if (value.length > 8 ){
                    setPhoneError(true)
                } else {
                    setPhoneError(false)
                }
                setPhone(value)
                break;
            case 'email':
                const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (!patternEmail.test(value)) {
                    setEmailError(true)
                } else {
                    setEmailError(false)
                }
                setEmail(value)
                break;
            default:
                break;
        }
    }
    
    //Coteja la informacion, una vez este todo ok, se almacena en un objeto json
    const ifMatch = param => {
        if (param.user.length > 0 && param.code.length > 0 && param.phone.length > 0 && param.email.length > 0) {
            const {user, code, phone, email} = param;
            let newAccount = {user,code,phone,email};
            let password = generator.generate({
                length: 10,
                numbers: true
            });
            newAccount.id = uuidv4();
            newAccount.password = password;
            setData(newAccount);
            setIsLogin(true);
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }


    //Esta funcion reacciona al button, colecta todos los input
    const handleClick = (e) => {
        e.preventDefault();
        let account = {user,code,phone,email};
        if (account) {
            ifMatch(account);
        }
    }
    
    //Redirecciona al Usuario a la pagina de bienvenida, una vez cierra la ventana de activacion de cuenta
    const handleLogin = () => {
        setTimeout(() => {
            window.location.href='/welcome';
        }, 2000);
    }
    
    /*let data = {
        email: 'santiago.monaco33@gmail.com'
    }*/
    
    //Mandar un email al nuevo usuario con el password y datos correspodientes
    const handleEmail = (e) => {
        e.preventDefault();
        //emailjs.init('user_ao0CknGgd7dWaUPKYRsd7');
        alert('Submiting...')
       /* emailjs.sendForm('gmail','check_email_confirmation','#formEmail','user_ao0CknGgd7dWaUPKYRsd7')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(err) {
            console.log('FAILED...', err);
            }); */
    }
        
    return (
        <main className='register-container'> 
            {isLogin 
            ?   <Fragment>
                    <Header src='./images/logo/USHEALTH2.jpeg' />
                    <ConfirmLogin 
                        src='./images/avatars/avatarConfirm.jpeg'
                        handleLogin={handleLogin}
                        text='Close'
                        btn='btn btn-primary'
                    />
                </Fragment>
            
            :   <div className='register-content'>
                <Header src='./images/logo/USHEALTH2.jpeg'/>
                <HeadLog 
                    infoForm = {{
                        title:"Let's connect!",
                        desc: 'Simply fill out this basic information and one of our insurance professionals will contact you with your personalized quote.',
                        privacy: 'We respect you privacy! USHEALTH Group will keep your information confidential, because your privacy is important to us.',
                        isHome: true
                    }}
                    
                    avatar='./images/avatars/avatarForm.jpeg'
                    
                />
                    {hasError &&
                        <Alert  
                            attribute= {{
                                text: 'You must complete all the fields to continue.'
                            }}
                        />
                    }
                    <form onSubmit={handleEmail} id='formEmail' name='formEmail'>
                        <Input 
                            attribute= {{
                                name: 'user',
                                placeholder: 'Full Name',
                                type: 'text',
                            }} 
                            handleChange={handleChange}
                            param={userError}
                        />
                        {userError &&
                            <SpanError
                                text="The input can't contain less than 4 characters"
                            />
                        }
                        <Input 
                            attribute= {{
                                name: 'zipcode',
                                placeholder: 'Zip Code',
                                type: 'number',
                            }} 
                            handleChange={handleChange}
                        />
                        {codeError &&
                            <SpanError
                                text="Zip code can't have more than 5 digits"
                            />
                        }
                        <Input 
                            attribute= {{
                                name: 'phone',
                                placeholder: 'Phone',
                                type: 'phone',
                            }} 
                            handleChange={handleChange}
                        />
                        {phoneError &&
                            <SpanError
                                text="The phone number can't have more than 8 digits"
                            />
                        }
                        <Input 
                            attribute= {{
                                name: 'email',
                                placeholder: 'Email',
                                type: 'email',
                            }} 
                            handleChange={handleChange}
                        />
                        {emailError &&
                            <SpanError
                                text="Please enter a correct email format"
                            />
                        }
                        <Button 
                            text='Submit'
                            type='submit'
                            handleClick={handleClick}
                            btn='btn bg-danger text-light'
                        />
                        <Button 
                            text='Cancel'
                            type='button'
                            btn='btn text-muted'
                        />
                    </form>
                    <Adviser />
                </div>
            }
        </main>

     );
}
 
export default Register;