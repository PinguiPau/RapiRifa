import '../Hero/Hero.css'
import Regalo from '../../assets/Regalo.png'

function Hero(){
    return(
        <section className='hero'>
            <div className="hero-content">
            <h1>Gestiona tus rifas de una manera mas sencilla</h1>
            <p>La manera más fácil de gestionar tus rifas: RapiRifa combina simplicidad y confianza en un solo lugar.</p>
            <button
             onClick={() => {
        document.getElementById('Rifas')?.scrollIntoView({
            behavior: 'smooth'
        })
    }}>Ver Rifas</button>
            </div>
            <div className="hero-image">
            <img src={Regalo} alt='FondoRifa'/>
            </div>

        </section>

    )
}

export default Hero