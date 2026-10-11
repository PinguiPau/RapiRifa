import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Explore from './components/Explore/Explore'
import Rifas from './components/Rifas/Rifas'
import Contacto from './components/Contacto/Contacto'

function App() {

  return (
        <><div className='background1-Inicio'>
        <Header />
        <Hero />
        </div>

        <div className='background2-Inicio'>
        <Explore />
        </div>

        <div className='background3-Inicio'>
        <Rifas />
        </div>

        <div className='background2-Inicio'>
        <Contacto />
        </div></>
  )
}

export default App
