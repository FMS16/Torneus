import React from 'react';
import { useRef } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import decodeJwT from '../utils/decodeJwt';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useLocation } from 'react-router-dom';

/*global FB*/

const Register = () => {
    const name = useRef('');
    const email = useRef('');
    const password = useRef('');
    const id = useRef('');
    const phoneNumber = useRef('');

    const navigate = useNavigate();
    const handleError = () => {
        alert('error');
    }

    const handleSuccess = (credentialResponse) => {
        if (credentialResponse.credential) {
            const { payload } = decodeJwT(credentialResponse.credential);
            if (payload.email !== "") {
                navigate('/register/google/auth', {state: payload});
            }
        }
    }

    const register = () =>{
        //TODO Completar el registro sin usar la api de google
    }

    return (
        <div className='container-login'>
            <img src='https://static.vecteezy.com/system/resources/previews/013/362/727/original/volley-beach-ball-free-png.png' className='img-ball__login' />
            {/* <img alt='img-people' title='people' className='img-login' src='https://upload.wikimedia.org/wikipedia/commons/5/59/Personas_entretenimiento.png' /> */}
            <form className='form-login'>
                <h1>Tourneus</h1>
                <div className='form-group'>
                    <input type='text' className='input-text__login' ref={name} placeholder='Nombre' />
                </div>
                <div className='form-group'>
                    <input type='email' className='input-text__login' ref={email} placeholder='Email' />
                </div>
                <div className='form-group'>
                    <input type='password' className='input-text__login' ref={password} placeholder='Contraseña' />
                </div>
                <div className='form-group'>
                    <input type='text' className='input-text__login' ref={id} placeholder='Cédula' />
                </div>
                <div className='form-group'>
                    <input type='text' className='input-text__login' ref={phoneNumber} placeholder='Número de teléfono' />
                </div>
                <div className='form-group group-btn'>
                    <input type='button' className='input-submit__login' onClick={register} value='Registrarse' />
                    <GoogleOAuthProvider clientId='56857042289-tee7n0simv04d77hkt4q7jn7jn45plrl.apps.googleusercontent.com'>
                        <div className='googleBtn'>
                            <GoogleLogin useOneTap onSuccess={handleSuccess} onError={handleError} />
                        </div>
                    </GoogleOAuthProvider>
                </div>
                <span>¿Ya tienes cuenta? <Link to='/'>Inicia sesión</Link></span>
            </form>
        </div>
    )
}

export default Register