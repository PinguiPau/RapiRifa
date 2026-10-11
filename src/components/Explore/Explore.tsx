import './Explore.css'
import Reloj from '../../assets/Reloj.png'
import Boletos from '../../assets/Boletos.png'
import Campana from '../../assets/Campana.png'

function Explore(){
    return(
        <section id='Explore' className='Explore'>
            <div className='TituloExplore'>
                <h1>Explorar</h1>
            </div>

            <div className='PrimerContenido'>

            <div className='ImgPrimerContenido'>
            <img src={Reloj} alt='Reloj' />
            </div>

            <p>Podrás controlar el tiempo restante de tu rifa con un cronómetro, para tener siempre presente cuánto falta antes de que finalice.</p>

            </div>
            
            <div className='SegundoContenido'>

            <p>Administra tus boletos y reserva tus compras con un tiempo de pago de 24 horas, optimizando la gestión de tus rifas y pagos.</p>

            <div className='ImgSegundoContenido'>
            <img src={Boletos} alt='Reloj' />
            </div>

            </div>
            
            <div className='TercerContenido'>

            <div className='ImgTercerContenido'>
            <img src={Campana} alt='Reloj' />
            </div>

            <p>Te enviaremos avisos sobre reservas próximas a vencer, pagos pendientes y fechas importantes de tu rifa, para que no pierdas ningún detalle.</p>
            
            </div>
            



        </section>
    )
}

export default Explore