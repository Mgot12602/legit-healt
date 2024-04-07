import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';


const activeStyle=(isActive:boolean)=>
isActive?{color:'white'}:{color:'black'}


const NavBar: React.FC = () => {

  return (
    <AppBar position="static" >
      <Toolbar sx={{gap:'2rem'}} >
        <NavLink to="/">
          {({ isActive }) => (
            <Button color="inherit" style={activeStyle(isActive)}>
              List Users
            </Button>
          )}
        </NavLink>
        <NavLink to="/create">
          {({ isActive }) => (
            <Button color="inherit" style={activeStyle(isActive)}>
              Create User
            </Button>
          )}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;