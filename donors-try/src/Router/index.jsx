import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PuntosDonacion from "../Pages/PuntosDonacion/PuntosDonacion";
import Login from "../Pages/Login/Login";
import CitaPrevia from "../Pages/CitaPrevia/CitaPrevia";
import AccesoDonante from "../Pages/AccesoDonante/AccesoDonante";
import AccesoSanitario from "../Pages/AccesoSanitario/AccesoSanitario";
import AccesoAdmin from "../Pages/AccesoAdmin/AccesoAdmin";
import CitaDonante from "../Pages/AccesoDonante/CitaDonante/CitaDonante";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Layout";
import Pruebas from "../Pages/Pruebas/Pruebas";
import VistaUsuarios from "../Pages/AccesoAdmin/VistaUsuarios/VistaUsuarios";
import VistaPuntos from "../Pages/AccesoAdmin/VistaPuntos/VistaPuntos";
import VistaFormulario from "../Pages/FormularioDonante/VistaFormulario";
import HistoricoDonante from "../Pages/AccesoDonante/HistoricoDonante/HistoricoDonante";

export const router = createBrowserRouter([
  /* {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/puntos',
        element: <PuntosDonacion />,
      },
      {
        path: '/cita',
        element: <CitaPrevia />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      export const router = createBrowserRouter([ */
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/puntos',
        element: <PuntosDonacion />,
      },
      {
        path: '/cita',
        element: <CitaPrevia />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/login/sanitario',
        element: <AccesoSanitario />,
      },
    ],
  },
  {
    path: '/login/donante',
    element: <AccesoDonante />,
  },

  {
    path: '/login/admin',
    element: <AccesoAdmin />,
  },
  {
    path: '/login/admin/usuarios',
    element: <VistaUsuarios />,
  },
  {
    path: '/login/admin/puntos',
    element: <VistaPuntos />,
  },
  {
    path: '/cita/formulario',
    element: <VistaFormulario />,
  },
  {
    path: '/login/citadonante',
    element: <CitaDonante />,
  },
   {
    path: '/login/historico',
    element: <HistoricoDonante />,
  }
])