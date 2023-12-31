import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, TextField} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { login } from "../../services/auth.service";



function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate= useNavigate()  
  
  
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  const logIn = async () => {   
    console.log(password)
    const data = await login(email, password)    

   if(!localStorage.getItem('token'))
      alert('Error: Usuario o contraseña invalidos')
   else {
    switch (localStorage.role) {
      case 'Admin':
        navigate('/login/admin')
        break
      case 'Donante':
        navigate('/login/donante')
      break
      case 'Sanitario':
        navigate('/login/sanitario')
        break
    }
    }
  }

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }


  return (
    <>
      <div
        className="container"
        style={{
          margin:'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          className="login"
          sx={{ maxWidth: '900px' }}
          raised={true}
          style={{ background: '##ff5232 ' }}
        >
          <CardHeader title="Acceso Usuarios">Acceso Usuarios</CardHeader>
          <CardContent>
            <TextField
              onChange={handleEmail}
              fullWidth
              margin="dense"
              label="Email"
              type="email"
              variant="standard"
              InputProps={{
                endAdornment: <Email />,
              }}
            ></TextField>
            <TextField
              type={isPassVisible ? 'text' : 'password'}
              onChange={handlePassword}
              fullWidth
              margin="dense"
              label="Contraseña"
              variant="standard"
              InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={handleClick}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            ></TextField>
          </CardContent>
          <Divider></Divider>
          <CardActions>
            <Button
              onClick={logIn}
              sx={{ backgroundColor: '#B31410', marginLeft: '10px' }}
              variant="contained"
              color="error"
            >
              Acceder
            </Button>
          </CardActions>
        </Box>
      </div>
    </>
  )
}

export default Login;
