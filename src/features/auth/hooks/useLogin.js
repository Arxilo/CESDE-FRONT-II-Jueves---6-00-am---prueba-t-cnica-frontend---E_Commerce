import { useState } from "react"
import { useNavigate } from "react-router-dom"
import login from "../services/authService"
import { mostrarError, mostrarExito } from "../../../shared/utils/alerts"

function useLogin() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [cargando, setCargando] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setCargando(true)

        setTimeout(() => {
            const resultado = login(usuario, password)
            if (resultado) {

                mostrarExito("Bienvenido de nuevo")
                navigate("/productos")

            } else {
                mostrarError("Credenciales incorrectas")
            }
            setCargando(false)
        }, 1500)
    }

    return { usuario, setUsuario, password, setPassword, handleSubmit, cargando }
}

export default useLogin