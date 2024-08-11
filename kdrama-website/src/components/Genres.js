// src/components/Genres.js
import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Genres.css';

const genres = ['Romance', 'Thriller', 'Comedy', 'Drama', 'Fantasy'];

function Genres() {
  return (
    <div className="genres-container">
      <Typography variant="h3" gutterBottom className="genres-title">
        Explore by Genre
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {genres.map((genre, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Button
              component={Link}
              to={`/dramas?genre=${genre.toLowerCase()}`}  // Pass genre as URL parameter
              variant="contained"
              className="genres-button"
            >
              {genre}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Genres;
