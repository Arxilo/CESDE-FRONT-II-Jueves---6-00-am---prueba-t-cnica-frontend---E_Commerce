import { createBrowserRouter , Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import ProductosPage from "../features/products/pages/ProductosPage";

const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to="/login" /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "/productos", element: <ProductosPage /> }
                ]
            }
        ]
    }
])

export default router;