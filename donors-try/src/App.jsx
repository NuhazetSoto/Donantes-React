import { useState } from 'react'
import './App.css'

import DrawerAppBar from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Home />
    </>
  );
}

export default App
