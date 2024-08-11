// src/components/ActorCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia} from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ActorCard({ actor }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={actor.name}
        height="140"
        image={actor.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {actor.name}
        </Typography>
        <Button component={Link} to={`/actor/${actor.id}`} variant="contained" color="primary">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default ActorCard;
