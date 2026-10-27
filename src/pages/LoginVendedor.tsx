import './LoginVendedor.css'

function LoginVendedor() {
    return (
        <section className="PaginaLoginVendedor">
            <div className="FormularioVendedor">
                <h1>Iniciar Sesion de Vendedor</h1>
                <p>Inicia sesión para gestionar tus rifas.</p>

                <form>
                    <label htmlFor="correoVendedor">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="correoVendedor"
                        placeholder="Ingresa tu correo"
                        required
                    />

                    <label htmlFor="contrasenaVendedor">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="contrasenaVendedor"
                        placeholder="Ingresa tu contraseña"
                        required
                    />

                    <button type="submit">
                        Iniciar sesión
                    </button>
                    crear cuenta
                </form>
            </div>
        </section>
    )
}

export default LoginVendedor
