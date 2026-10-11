
import './Contacto.css'

function Contacto() {
    return (
        <section id="Contacto" className="Contacto">
            <div className="ContenidoContacto">

                <h1>Contacto</h1>

                <p className="DescripcionContacto">
                    ¿Necesitas ayuda? Déjanos tu mensaje y nos pondremos en contacto contigo.
                </p>

                <div className="CampoFormulario">
                    <label htmlFor="Nombre">Nombre completo</label>
                    <input
                        id="Nombre"
                        type="text"
                        placeholder="Escribe tu nombre completo..."
                    />
                </div>

                <div className="CampoFormulario">
                    <label htmlFor="Correo">Correo electrónico</label>
                    <input
                        id="Correo"
                        type="email"
                        placeholder="Escribe tu correo electrónico..."
                    />
                </div>

                <div className="CampoFormulario">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </div>

                <button className="BotonEnviar">Enviar</button>

                <p className="PoliticaPrivacidad">
                    Al enviar este formulario, aceptas nuestra política de privacidad.
                </p>

            </div>
        </section>
    )
}

export default Contacto
