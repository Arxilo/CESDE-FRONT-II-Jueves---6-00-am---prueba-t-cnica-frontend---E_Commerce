import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {

    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem("session")
        navigate("/login")
    }

    return (

        <div className="min-h-screen bg-gray-100">
            
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">E-Commerce Admin</h1>
                <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                    Cerrar sesión
                </button>
            </nav>

            <main className="p-6">
                <Outlet />
            </main>

        </div>
    )
}

export default MainLayout;