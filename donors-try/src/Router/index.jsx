
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PuntosDonacion from "../Pages/PuntosDonacion/PuntosDonacion";
import Login from "../Pages/Login/Login";
import CitaPrevia from "../Pages/CitaPrevia/CitaPrevia";
import AccesoDonante from "../Pages/AccesoDonante/AccesoDonante";
import AccesoSanitario from "../Pages/AccesoSanitario/AccesoSanitario";
import AccesoAdmin from "../Pages/AccesoAdmin/AccesoAdmin";
import CitaDonante from "../Pages/AccesoDonante/CitaDonante/CitaDonante";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/puntos',
    element: <PuntosDonacion />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cita',
    element: <CitaPrevia />,
  },
  {
    path: '/login/donante',
    element: <AccesoDonante />,
  },
  {
    path: '/login/sanitario',
    element: <AccesoSanitario />,
  },
  {
    path: '/login/admin',
    element: <AccesoAdmin />,
  },
  {
    path: '/login/prueba2',
    element: <CitaDonante />,
  },
])