import useLogin from "../hooks/useLogin";

function LoginPage() {

    const { usuario, setUsuario, password, setPassword, handleSubmit, cargando , mostrarPassword , setMostrarPassword} = useLogin()
    
    const spinner = (
        <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            revisando...
        </span>
    )

    const iconoOjoAbierto = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    )

    const iconoOjoCerrado = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
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
                <div className="relative mb-6">
                    <input
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-purple-400"
                        type={mostrarPassword ? "text" : "password"}
                        placeholder="••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                    >
                        {mostrarPassword ? iconoOjoCerrado : iconoOjoAbierto}
                    </button>
                </div>

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
