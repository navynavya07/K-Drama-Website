import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './AboutPage.css';  // Import the About Us CSS
import aboutImage from '../assets/team.jpg'; // Import your About Us image here
import visionImage from '../assets/vision.jpeg'; // Import your Vision image here
import contactImage from '../assets/contact.jpeg'; // Import your Contact Us image here

function AboutPage() {
  return (
    <Container className="about-container">
      <Grid container spacing={5} className="about-grid-container">
        {/* About Us Section */}
        <Grid item xs={12} md={6} className="about-content">
          <Typography variant="h3" className="section-heading">
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our K-Drama information website, where we are passionate about bringing you the latest and most detailed insights into your favorite Korean dramas. Our mission is to provide a comprehensive platform for K-Drama enthusiasts to discover new shows, explore genres, and dive into detailed drama information.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="about-image-container">
          <img src={aboutImage} alt="Our team" className="about-image" />
        </Grid>
      </Grid>

      <Grid container spacing={5} className="vision-grid-container">
        {/* Our Vision Section */}
        <Grid item xs={12} md={6} className="vision-image-container">
          <img src={visionImage} alt="Vision" className="vision-image" />
        </Grid>
        <Grid item xs={12} md={6} className="vision-content">
          <Typography variant="h4" className="section-heading">
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            Our vision is to be the go-to destination for K-Drama fans around the world. We strive to deliver a user-friendly platform with rich and up-to-date information about the latest and greatest K-Dramas, ensuring that our users can easily find and enjoy their next favorite show.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={5} className="contact-grid-container">
        {/* Contact Us Section */}
        <Grid item xs={12} md={6} className="contact-content">
          <Typography variant="h5" className="section-heading">
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions, feedback, or suggestions, feel free to reach out to us through our contact page. We value your input and are always looking for ways to improve our platform.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="contact-image-container">
          <img src={contactImage} alt="Contact Us visual" className="contact-image" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutPage;
