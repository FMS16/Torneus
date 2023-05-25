import React from 'react'
import '../App.css'

const Header = (param) => {
  return (
    <header>
        <h1 className='title'>Torneus</h1>
        {param.user == 'admin' 
        ? 
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>Inicio</li>
                <li>Mis torneos</li>
                <li>Ayuda</li>
            </ul>
        </nav> 
        :
        <nav className='nav'>
            <ul className='nav-menu'>
                <li>Inicio</li>
                <li>Ayuda</li>
            </ul>
        </nav> 
        }
    </header>
  );
}

export default Header