// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link as MUILink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Grid container spacing={2} className="footer-grid">
          <Grid item xs={12} sm={4} className="footer-section">
            <Typography variant="h6" className="footer-title">The Sleep Deprived Squad</Typography>
            <Typography variant="body2" className="footer-copy">© 2024 The Sleep Deprived Squad</Typography>
            <MUILink component={Link} to="/privacy-policy" className="footer-link">Privacy Policy</MUILink>
          </Grid>
          <Grid item xs={12} sm={4} className="footer-section">
            <Typography variant="h6" className="footer-title">Links</Typography>
            <MUILink component={Link} to="/" className="footer-link">Home</MUILink>
            <MUILink component={Link} to="/dramas" className="footer-link">K-Dramas</MUILink>
          </Grid>
          <Grid item xs={12} sm={4} className="footer-section">
            <Typography variant="h6" className="footer-title">Follow Us</Typography>
            <MUILink href="#" className="footer-link">Facebook</MUILink>
            <MUILink href="#" className="footer-link">Twitter</MUILink>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
