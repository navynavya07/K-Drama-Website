// src/components/HeroSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import './HeroSection.css';

function HeroSection() {
  return (
    <Box className="hero-section">
      <Box className="hero-middle">
      <Typography variant="h3" className="hero-title">
        Discover Your Next Favorite K-Drama
      </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;
