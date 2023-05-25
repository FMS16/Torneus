import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const RegisterHandler = () => {

    const navigate = useNavigate();

    const navigateRegisterViewerUser = () =>{
        //navigate(`/register`,{state:'viewerUser'});
        navigate(`/home`,{state:'viewerUser'});
    }

    const navigateRegisterTeamAdmin = () =>{
        navigate(`/register`,{state:'teamAdmin'});
    }

    const navigateRegisterTournamentAdmin = () =>{
        navigate(`/register`,{state:'tournamentAdmin'});
    }

  return (
    <div className='container-login'>
            <img src='https://static.vecteezy.com/system/resources/previews/013/362/727/original/volley-beach-ball-free-png.png' className='img-ball__login' />
            {/* <img alt='img-people' title='people' className='img-login' src='https://upload.wikimedia.org/wikipedia/commons/5/59/Personas_entretenimiento.png' /> */}
            <div className='form-register__handler'>
                <h1>Tourneus</h1>
                <div className='form-group'>
                    <button className='btn-register__handler' onClick={navigateRegisterViewerUser}>Crear usuario espectador</button>
                </div>
                <div className='form-group'>
                    <button className='btn-register__handler' onClick={navigateRegisterTeamAdmin}>Crear usuario administrador de equipos</button>
                </div>
                <div className='form-group'>
                    <button className='btn-register__handler' onClick={navigateRegisterTournamentAdmin}>Crear usuario organizador de torneos</button>
                </div>
                <span>¿Ya tienes cuenta? <Link to='/'>Inicia sesión</Link></span>
            </div>
        </div>
  )
}

export default RegisterHandler