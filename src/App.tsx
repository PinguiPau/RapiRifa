import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Explore from './components/Explore/Explore'
import Rifas from './components/Rifas/Rifas'
import Contacto from './components/Contacto/Contacto'
import SeleccionAcceso from './pages/SeleccionAcceso'
import LoginVendedor from './pages/LoginVendedor'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="background1-Inicio">
                            <Header />
                            <Hero />
                        </div>

                        <div className="background2-Inicio">
                            <Explore />
                        </div>

                        <div className="background3-Inicio">
                            <Rifas />
                        </div>

                        <div className="background2-Inicio">
                            <Contacto />
                        </div>
                    </>
                } />

                <Route
                    path="/iniciar-sesion"
                    element={<div className="background2-Inicio">
                    <SeleccionAcceso /></div>}
                />

                <Route
                    path="/iniciar-sesion/vendedor"
                    element={<div className="background1-InicioSesion">
                    <LoginVendedor /></div>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
