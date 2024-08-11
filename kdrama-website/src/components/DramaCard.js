import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './DramaCard.css';

function DramaCard({ drama }) {
  return (
    <Card className="drama-card">
      <CardMedia
        component="img"
        alt={drama.title}
        height="300"
        image={drama.image}
      />
      <CardContent className="drama-card-content">
        <Typography variant="h5" component="div" className="drama-card-title">
          {drama.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="drama-card-genre">
          {drama.genre}
          <br></br>
          Rating: {drama.rating}
        </Typography>
        <Button component={Link} to={`/drama/${drama.id}`} variant="contained" color="primary" className="drama-card-button">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default DramaCard;
