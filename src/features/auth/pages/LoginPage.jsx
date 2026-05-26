import useLogin from "../hooks/useLogin";

function LoginPage() {

    const { usuario, setUsuario, password, setPassword, handleSubmit, cargando } = useLogin()
    const spinner = (
        <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            revisando...
        </span>
    )

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-violet-600">
            <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 w-96"
            >
                <h1 className="text-3xl font-bold text-white mb-2">Dashy</h1>
                <h2 className="text-xl font-bold text-white mb-1">Bienvenido de nuevo</h2>
                <p className="text-white/60 text-sm mb-8">Ingresa tus credenciales para continuar</p>

                <label className="text-white/80 text-sm block mb-1">Usuario</label>
                <input
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg mb-4 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-purple-400"
                    type="text"
                    placeholder="Admin"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <label className="text-white/80 text-sm block mb-1">Contraseña</label>
                <input
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-lg mb-6 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-purple-400"
                    type="password"
                    placeholder="••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={cargando}
                    className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {cargando ? spinner : "Ingresar"}
                </button>

                <p className="text-white/40 text-xs text-center mt-6">Usuario: Admin — PIN: 1234</p>
            </form>
        </div>
    );
}

export default LoginPage;
