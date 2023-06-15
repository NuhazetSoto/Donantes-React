
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PuntosDonacion from "../Pages/PuntosDonacion/PuntosDonacion";
import Login from "../Pages/Login/Login";
import CitaPrevia from "../Pages/CitaPrevia/CitaPrevia";
import AccesoDonante from "../Pages/AccesoDonante/AccesoDonante";
import AccesoSanitario from "../Pages/AccesoSanitario/AccesoSanitario";
import AccesoAdmin from "../Pages/AccesoAdmin/AccesoAdmin";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Layout";
import Pruebas from "../Pages/Pruebas/Pruebas";

export const router= createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/puntos',
            element: <PuntosDonacion />
            },
            {
                path:'/cita',
                element: <CitaPrevia/>
            },
            {
                path:'/login',
                element:<Login />
            }
        ]
    },
    {
        path:'/login/donante',
        element: <AccesoDonante />
    },
    {
        path:'/login/sanitario',
        element:<AccesoSanitario/>
    },
    {
        path:'/login/admin',
        element: <AccesoAdmin/>
    },
    {
        path:'/pruebas',
        element:<Pruebas/>
    }
])