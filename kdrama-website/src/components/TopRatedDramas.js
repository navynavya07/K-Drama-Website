// src/components/TopRatedDramas.js
import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import DramaCard from './DramaCard';
import './TopRatedDramas.css'; // Import the CSS file

const dummyTopRatedDramas = [
  { id: 1, title: 'Queen Of Tears', genre: 'Romance, Comedy', rating: 4.8,image: '../assets/QOT.jpg' },
  { id: 11, title: 'Crash Landing On You', genre: 'Drama', rating: 4.7, image: '../assets/CLO.jpg' },
  {id: 14,title: "Reply 1988",genre: "Family drama; Comedy; Romance; Coming-of-age",rating: 9.1, image: "../assets/Reply 1988.jpg"}
];

function TopRatedDramas() {
  return (
    <Container className="top-rated-dramas-container">
      <Typography className="top-rated-dramas-title" variant="h4" gutterBottom>
        Top Rated Dramas
      </Typography>
      <Grid container spacing={3}>
        {dummyTopRatedDramas.map((drama) => (
          <Grid item xs={12} sm={6} md={4} key={drama.id}>
            <DramaCard className="top-rated-dramas-card" drama={drama} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TopRatedDramas;
