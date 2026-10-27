import './Header.css'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <div className='header'>

             <div className="brand">
                <img src={logo} alt="RapiRifa" />
                <span className="logo">RapiRifa</span>
            </div>

            <nav>
                <a href='#Contacto'>Contacto</a>
                <a href='#Rifas'>Rifas Activas</a>
                <a href='#Explore'>Explorar</a>
                <Link to="/iniciar-sesion">Iniciar Sesión</Link>
            </nav>
            
        </div>
    )
}

export default Header