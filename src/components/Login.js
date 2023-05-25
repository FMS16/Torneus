import React, { useState } from 'react';
import { useRef } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import decodeJwT from '../utils/decodeJwt';

/*global FB*/

const Login = () => {
    const email = useRef('');
    const password = useRef('');
    const navigate = useNavigate();

    const[error, setError] = useState('');

    const handleError = () => {
        alert('error');
    }

    const handleSuccess = (credentialResponse) => {
        //TODO si el mail de google no esta logueado mandar al registro igual
        if (credentialResponse.credential) {
            const { payload } = decodeJwT(credentialResponse.credential);
            navigate(`/home`, { state: payload.email });
        }
    }

    const submitForm = () => {
        if(email.current.value == '' || password.current.value == ''){
            setError('No pueden haber campos vacíos.');
            return;
        }
        var raw = JSON.stringify({
            "mail": email.current.value,
            "pass": password.current.value
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch('https://webapitorneus.azurewebsites.net/Usuario/api/Login', requestOptions)
            .then(response => response.json())
            .then(data => navigate(`/home`, { state: data }))
            .catch(e => setError('Los datos ingresados no son correctos'));
    }

    return (
        <div className='container-login'>
            <img src='https://static.vecteezy.com/system/resources/previews/013/362/727/original/volley-beach-ball-free-png.png' className='img-ball__login' />
            {/* <img alt='img-people' title='people' className='img-login' src='https://upload.wikimedia.org/wikipedia/commons/5/59/Personas_entretenimiento.png' /> */}
            <form className='form-login'>
                <h1>Tourneus</h1>
                <div className='form-group'>
                    <input type='email' className='input-text__login' ref={email} placeholder='Email' />
                </div>
                <div className='form-group'>
                    <input type='password' className='input-text__login' ref={password} placeholder='Contraseña' />
                </div>
                <div className='form-group group-btn'>
                    <input type='button' onClick={submitForm} className='input-submit__login' value='Iniciar Sesión' />
                    {error != '' ? <p className='login-error'>{error}</p> : <span className='dnone'></span>}
                    <GoogleOAuthProvider clientId='56857042289-tee7n0simv04d77hkt4q7jn7jn45plrl.apps.googleusercontent.com'>
                        <div className='googleBtn'>
                            <GoogleLogin useOneTap onSuccess={handleSuccess} onError={handleError} />
                        </div>
                    </GoogleOAuthProvider>
                </div>
                <span>¿No tienes cuenta? <Link to='/register-handler'>Regístrate aquí</Link></span>
            </form>
        </div>
    )
}

export default Login