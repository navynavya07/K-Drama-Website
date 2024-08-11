import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import dramaData from '../drama.json'; // Adjust the path to your JSON file
import './RelatedDramas.css';
function RelatedDramas({ related }) {
  const relatedDramas = dramaData.filter((drama) => related.includes(drama.id));

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Related Dramas
      </Typography>
      <Grid container spacing={3}>
        {relatedDramas.map((drama) => (
          <Grid item xs={12} sm={6} md={4} key={drama.id}>
            <Card className="related-drama-card">
              <CardMedia
                component="img"
                alt={drama.title}
                image={drama.image}
                className="related-drama-image"
              />
              <CardContent>
                <Typography variant="h7">{drama.title}</Typography>
                <Button
                  component={Link}
                  to={`/drama/${drama.id}`}
                  variant="contained"
                  sx={{
                    backgroundColor: '#6a1b9a', // Deep purple color
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#4a0072', // Darker purple for hover effect
                    },
                  }}
                >
                  See More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RelatedDramas;
