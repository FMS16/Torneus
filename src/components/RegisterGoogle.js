import React from 'react'
import {useLocation} from 'react-router-dom';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const RegisterGoogle = () => {
    const location = useLocation();
    console.log(location.state);
    const id = useRef('');
    const phoneNumber = useRef('');

    const register = () =>{
        const object = {
            "name": location.state.name,
            "mail": location.state.email,
            "pass": location.state.sub,
            "dni": id.current.value,
            "phone": phoneNumber.current.value
        }

        //TODO hacer el navigate a home una vez complete el registro con la api de .net
    }
  return (
    <div className='container-login'>
            <img src='https://static.vecteezy.com/system/resources/previews/013/362/727/original/volley-beach-ball-free-png.png' className='img-ball__login' />
            {/* <img alt='img-people' title='people' className='img-login' src='https://upload.wikimedia.org/wikipedia/commons/5/59/Personas_entretenimiento.png' /> */}
            <form className='form-login'>
                <h1>Tourneus</h1>
                <h2>¡Solo unos datos más!</h2>
                <div className='form-group'>
                    <input type='text' readOnly className='input-text__login' placeholder={location.state.name} />
                </div>
                <div className='form-group'>
                    <input type='email' readOnly className='input-text__login' placeholder={location.state.email} />
                </div>
                <div className='form-group'>
                    <input type='text' className='input-text__login' ref={id} placeholder='Cédula' />
                </div>
                <div className='form-group'>
                    <input type='text' className='input-text__login' ref={phoneNumber} placeholder='Número de teléfono' />
                </div>
                <div className='form-group group-btn'>
                    <input type='button' className='input-submit__login' onClick={register} value='Registrarse' />
                </div>
                <span>¿Ya tienes cuenta? <Link to='/'>Inicia sesión</Link></span>
            </form>
        </div>
  )
}

export default RegisterGoogle