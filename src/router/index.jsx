import { createBrowserRouter } from "react-router-dom";
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