import { createBrowserRouter, redirect } from "react-router-dom";
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
import VistaUsuarios from "../Pages/AccesoAdmin/VistaUsuarios/VistaUsuarios";
import VistaPuntos from "../Pages/AccesoAdmin/VistaPuntos/VistaPuntos";
import AccesoSanitarioUbi from "../Pages/AccesoSanitarioUbi/AccesoSanitarioUbi";
import AccesoSanitarioDat from "../Pages/AccesoSanitarioDat/AccesoSanitarioDat";
import AccesoSanitarioDatAct from "../Pages/AccesoSanitarioDatAct/AccesoSanitarioDatAct";
import SanitarioDatGuardado from '../Pages/SanitarioDatGuardado/SanitarioDatGuardado'
import VistaFormulario from "../Pages/FormularioDonante/VistaFormulario";
import HistoricoDonante from "../Pages/AccesoDonante/HistoricoDonante/HistoricoDonante";


const checkAuth = () => {
  if(!localStorage.getItem('token')) return redirect('/login')
  else return null
}

const checkLogin =() => {
  if(!localStorage.getItem('token')) return redirect('/dashboard')
  else return null
}

const checkAdmin =() => {
  return (localStorage.getItem('role'=== 'Admin'))  
 
}

const checkDonante =() => {
  console.log(localStorage.getItem('role'))
  if (( localStorage.getItem('role') === 'Admin') || (localStorage.getItem('role') === 'Donante')) {
  return null
  } else {
  return redirect('/')
  }  
}

const checkSanitario =() => {
  console.log(localStorage.getItem('role'))
  if (( localStorage.getItem('role') === 'Admin') || (localStorage.getItem('role') === 'Sanitario')) {
  return null
  } else {
  return  redirect('/')
  }
}
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/login/admin', element: <AccesoAdmin />, loader: checkAdmin },
      {
        path: '/login/donante',
        element: <AccesoDonante />,
        loader: checkDonante,
      },
      {
        path: '/login/sanitario',
        element: <AccesoSanitario />,
        loader: checkSanitario,
      },
      { path: '/puntos', element: <PuntosDonacion />, loader: checkAdmin },
      { path: '/cita', element: <CitaPrevia />, loader: checkAdmin },
      {
        path: '/login/admin/usuarios',
        element: <VistaUsuarios />,
        loader: checkAdmin,
      },
      {
        path: '/login/admin/puntos',
        element: <VistaPuntos />,
        loader: checkAdmin,
      },
      {
        path: '/cita/formulario',
        element: <VistaFormulario />,
        loader: checkDonante,
      },
      {
        path: '/login/citadonante',
        element: <CitaDonante />,
        loader: checkDonante,
      },
      {
        path: '/login/historico',
        element: <HistoricoDonante />,
        loader: checkDonante,
      },
      {
        path: '/login/sanitario/ubicacion',
        element: <AccesoSanitarioUbi />,
        loader: checkSanitario,
      },
      {
        path: '/login/sanitario/misdatos',
        element: <AccesoSanitarioDat />,
        loader: checkSanitario,
      },
      {
        path: '/login/sanitario/misdatos/actualizar',
        element: <AccesoSanitarioDatAct />,
        loader: checkSanitario,
      },
      {
        path: '/login/sanitario/misdatos/actualizar/guardado',
        element: <SanitarioDatGuardado />,
        loader: checkSanitario,
      },
    ],
  },
])
