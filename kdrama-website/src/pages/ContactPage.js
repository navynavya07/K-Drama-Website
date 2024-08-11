// src/pages/ContactPage.js
import React from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import './ContactPage.css'; // Import the CSS file

function ContactPage() {
  return (
    <Container className="contact-page-container">
      <Paper elevation={3} className="contact-form-wrapper">
        <Typography variant="h4" gutterBottom className="contact-page-title">
          Contact Us
        </Typography>
        <form noValidate autoComplete="off" className="contact-form">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            className="contact-form-field"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            className="contact-form-field"
          />
          <TextField
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
            className="contact-form-field"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            className="contact-form-field"
          />
          <Button variant="contained" color="primary" className="contact-form-button">
            Send Message
          </Button>
        </form>
      </Paper>
      <Paper elevation={3} className="contact-details-wrapper">
        <Typography variant="h4" gutterBottom className="contact-details-title">
          Contact Details
        </Typography>
        <Typography variant="body1" className="contact-details-text">
          Email: contact@thesleepdeprivedsquad.com
        </Typography>
        <Typography variant="body1" className="contact-details-text">
          Phone: +123456789
        </Typography>
      </Paper>
    </Container>
  );
}

export default ContactPage;
