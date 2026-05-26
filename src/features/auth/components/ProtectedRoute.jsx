import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    
    const session = localStorage.getItem("session");
    return session ? <Outlet /> : <Navigate to = "/login" />

}

export default ProtectedRoute;