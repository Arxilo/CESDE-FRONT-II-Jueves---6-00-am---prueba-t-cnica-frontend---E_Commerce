import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "/productos", element: null }
                ]
            }
        ]
    }
])

export default router;