import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Header.css"



const drawerWidth = 240;


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          style={{ background: '#BF0021', position: 'relative', maxHeight: '80px' }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                margin: 0,
              }}
            >
              DonApp
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link to={'/'}>
                <Button
                  sx={{ backgroundColor: '#BF0021', marginLeft: '10px' }}
                  variant="contained"
                  color="error"
                >
                  Home
                </Button>
              </Link>
              <Link to={'/puntos'}>
                <Button
                  sx={{ backgroundColor: '#BF0021', marginLeft: '10px' }}
                  variant="contained"
                  color="error"
                >
                  Puntos de Donacion
                </Button>
              </Link>
              <Link to={'/cita'}>
                <Button
                  sx={{ backgroundColor: '#BF0021', marginLeft: '10px' }}
                  variant="contained"
                  color="error"
                >
                  Cita Previa
                </Button>
              </Link>
              <Link to={'/login'}>
                <Button
                  sx={{ backgroundColor: '#BF0021', marginLeft: '10px' }}
                  variant="contained"
                  color="error"
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <CssBaseline />
      </Box>
      <Toolbar
        style={{ background: '#BF0021', position: 'relative', top: '0px' }}
      >
        <Typography style={{ color: 'whitesmoke'}}>
          Teléfono gratuito de atención al donante: 900 234 061 | De lunes a
          viernes de 8:00 a 22:00 horas
        </Typography>
      </Toolbar>
    </div>
  )
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
