// src/components/NewsletterSignup.js
import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './NewsletterSignup.css';  // Import the CSS file

function NewsletterSignup() {
  return (
    <Container className="newsletter-container">
      <Typography variant="h4" className="newsletter-title" gutterBottom>
        Sign Up for Our Newsletter
      </Typography>
      <form noValidate autoComplete="off" className="newsletter-form">
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          className="newsletter-input"
        />
        <Button
          variant="contained"
          color="primary"
          className="newsletter-button"
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default NewsletterSignup;
