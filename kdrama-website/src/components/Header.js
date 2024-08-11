// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
        The Sleep Deprived Squad
        </Typography>
        <Button className="nav-button" color="inherit" component={Link} to="/">Home</Button>
        <Button className="nav-button" color="inherit" component={Link} to="/dramas">K-Dramas</Button>
        <Button className="nav-button" color="inherit" component={Link} to="/quotes">Quotes</Button>
        <Button className="nav-button" color="inherit" component={Link} to="/about">About</Button>
        <Button className="nav-button" color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
