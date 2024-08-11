import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './FeaturedDramas.css';
import backgroundImg from '../assets/background.png'; // Import image

const featuredDramas = [
  { id: 1, title: 'Queen Of Tears', description: "Marriage of the Century... War of the Century?", image: '../assets/QOT.jpg' },
  { id: 13, title: 'Twenty Five Twenty One', description: '1998, a refreshing youth chemistry depicting', image: '../assets/2521.jpg' },
  { id: 11, title: 'Crash Landing On You', description: 'A drama depicting the top-secret love story', image: '../assets/CLO.jpg' },
  { id: 2, title: "The Glory", description: "A high school girl, who was bullied, seeks revenge on her....", image: "../assets/Glory.jpg" },
];

function FeaturedDramas() {
  return (
    <div className="featured-dramas-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Typography variant="h1" gutterBottom className="featured-dramas-title">
        Featured K-Dramas
      </Typography>
      <Grid container spacing={3}>
        {featuredDramas.map((drama) => (
          <Grid item xs={12} sm={6} md={3} key={drama.id}>
            <Card className="featured-dramas-card">
              <CardMedia
                component="img"
                alt={drama.title}
                className="featured-dramas-card-media"
                image={drama.image}
              />
              <CardContent className="featured-dramas-card-content">
                <Typography variant="h6">{drama.title}</Typography>
                <Typography color="textSecondary">
                  {drama.description}
                </Typography>
                <Button component={Link} to={`/drama/${drama.id}`} variant="contained" className="featured-dramas-button">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FeaturedDramas;
