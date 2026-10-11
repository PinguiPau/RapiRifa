import './Header.css'
import logo from '../../assets/Logo.png'

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
                <a href='#'>Iniciar Sesion</a>
            </nav>
            
        </div>
    )
}

export default Header