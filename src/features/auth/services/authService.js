function login( usuario , password) {
    
    const usuarioAsignado = "Admin";
    const passwordAsignado = "1234";

    if (usuario == usuarioAsignado && password == passwordAsignado) {
        
        localStorage.setItem("session" , true);
        console.log("correcto")
        return true;
        
    } else {
        console.log("incorrecto")
        return false;
    }

}

export default login;