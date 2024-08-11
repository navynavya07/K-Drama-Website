// src/pages/GenresPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid } from '@mui/material';
import DramaCard from '../components/DramaCard';

const dummyDramasByGenre = [
  { id: 1, title: 'Romantic Drama 1', genre: 'Romance', rating: 4.5 },
  { id: 2, title: 'Romantic Drama 2', genre: 'Romance', rating: 4.2 },
  // Add more dummy data as needed
];

function GenresPage() {
  const { genre } = useParams();
  const dramas = dummyDramasByGenre.filter((drama) => drama.genre.toLowerCase() === genre.toLowerCase());

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {genre} K-Dramas
      </Typography>
      <Grid container spacing={3}>
        {dramas.map((drama) => (
          <Grid item xs={12} sm={6} md={4} key={drama.id}>
            <DramaCard drama={drama} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default GenresPage;
