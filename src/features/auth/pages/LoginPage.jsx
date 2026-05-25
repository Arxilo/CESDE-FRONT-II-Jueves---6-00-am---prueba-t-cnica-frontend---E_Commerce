import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../services/authService";


function LoginPage() {

    const navigate = useNavigate();
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        const resultado = login(usuario, password);
        if (resultado) {
            navigate("/productos");
        }
    }

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
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage;