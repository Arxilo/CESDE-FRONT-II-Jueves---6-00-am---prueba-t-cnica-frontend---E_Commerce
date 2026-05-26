import useLogin from "../hooks/useLogin";

function LoginPage() {
    const { usuario, setUsuario, password, setPassword, handleSubmit } =
        useLogin();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <input
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <input
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
