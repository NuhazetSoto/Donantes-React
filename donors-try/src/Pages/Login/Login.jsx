import { useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState("");

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function checkEmail(email) {
    console.log(email);
    if (email === "nuha@mail") {
      alert("Todo OK");
    } else {
      alert("Email incorect");
    }
  }

  return (
    <>
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
        }}
      >
        <Card
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
              variant="standard"
              InputProps={{
                endAdornment: <Email />,
              }}
            ></TextField>
            <TextField
              type={isPassVisible ? 'text' : 'password'}
              fullWidth
              margin="dense"
              label="Contraseña"
              variant="standard"
              InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={(e) => handleClick()}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            ></TextField>
          </CardContent>
          <Divider></Divider>
          <CardActions>
            <Button
              onClick={(e) => {
                checkEmail(email)
              }}
              size="small"
              color="secondary"
              variant="contained"
            >
              Acceder
            </Button>
          </CardActions>
        </Card>
        <div>
          <Link to={'/login/donante'}>
            <Button>Donantes</Button>
          </Link>
          <Link to={'/login/sanitario'}>
            <Button>Sanitarios</Button>
          </Link>

          <Link to={'/login/admin'}>
            <Button>Administradores</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login;
