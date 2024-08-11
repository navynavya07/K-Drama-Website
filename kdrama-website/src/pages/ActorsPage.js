import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ActorCard from '../components/ActorCard';

const dummyActors = [
  { id: 1, name: 'Actor 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Actor 2', image: 'https://via.placeholder.com/150' },
];

function ActorsPage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Actors
      </Typography>
      <Grid container spacing={3}>
        {dummyActors.map((actor) => (
          <Grid item xs={12} sm={6} md={4} key={actor.id}>
            <ActorCard actor={actor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ActorsPage;
