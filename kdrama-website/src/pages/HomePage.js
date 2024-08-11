// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FeaturedDramas from '../components/FeaturedDramas';
import Genres from '../components/Genres';
import HeroSection from '../components/HeroSection';
import TopRatedDramas from '../components/TopRatedDramas';
import NewsletterSignup from '../components/NewsletterSignup';
import './HomePage.css'; 

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box className="main-section">
        <Box className="main-content">
          <Typography variant="h1" className="main-title">
            The Sleep Deprived Squad
          </Typography>
          <Typography variant="h4" className="main-subtitle">
            K-Dramas aren't just a time-filler; they weave laughter, tears, and lessons, inspiring you to live your own extraordinary story.
          </Typography>
          <Typography variant="h6" className="main-text">
            Life’s tough, but K-Dramas fuel my laughter, frustration, and everything in between.
          </Typography>
        </Box>
        <Box className="main-image">
          <img src="/assets/Vincenzo.png" alt="Hero" />
        </Box>
      </Box>
      <HeroSection />
      <FeaturedDramas />
      <Genres />
      <TopRatedDramas />
      <NewsletterSignup />
    </Container>
  );
}

export default HomePage;
