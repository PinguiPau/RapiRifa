import './SeleccionAcceso.css'
import { Link } from 'react-router-dom'

function SeleccionAcceso() {
    return (
        <section className='PaginaSeleccionAcceso'>
            <h1>¡Bienvenido a RapiRifa!</h1>
            <p>¿Qué deseas hacer?</p>

            <div className='OpcionesAcceso'>
                <Link
                to="/iniciar-sesion/vendedor"
                className="BotonAcceso">¿Quieres crear rifas?
                </Link>
                <button className='BotonComprarRifas'>¿Quieres comprar rifas?</button>
            </div>

        </section>
    )
}

export default SeleccionAcceso