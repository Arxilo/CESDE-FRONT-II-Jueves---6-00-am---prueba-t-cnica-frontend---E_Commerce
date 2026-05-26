function login(usuario, password) {

    const usuarioAsignado = "Admin";
    const passwordAsignado = "1234";

    if (usuario == usuarioAsignado && password == passwordAsignado) {

        localStorage.setItem("session", true);
        return true;

    } else {
        return false;
    }

}

export default login;