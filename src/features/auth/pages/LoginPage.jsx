import useLogin from "../hooks/useLogin";

function LoginPage() {

    const { usuario, setUsuario, password, setPassword, handleSubmit } = useLogin()

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage;