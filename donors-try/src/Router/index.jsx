
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PuntosDonacion from "../Pages/PuntosDonacion/PuntosDonacion";
import Login from "../Pages/Login/Login";
import CitaPrevia from "../Pages/CitaPrevia/CitaPrevia";

export const router= createBrowserRouter([
    {
        path:'/home',
        element: <Home />
    },
    {
        path:'/puntos',
        element: <PuntosDonacion />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path:'/cita',
        element: <CitaPrevia />
    }
])