import { useState } from "react"
import { useNavigate } from "react-router-dom"
import login from "../services/authService"

function useLogin() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const resultado = login(usuario, password)
        if (resultado) {
            navigate("/productos")
        }
    }

    return { usuario, setUsuario, password, setPassword, handleSubmit }
}

export default useLogin