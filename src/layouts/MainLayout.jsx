import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("session")
        navigate("/login")
    }

    return (

        <div className="min-h-screen bg-gray-100">

            <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
                <h1 className="text-lg font-bold text-purple-700">
                    <span className="text-purple-500 mr-1">●</span>Dashy
                </h1>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-600 border border-red-300 px-4 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        Cerrar sesión
                    </button>
                </div>
            </nav>

            <main className="p-6">
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout;