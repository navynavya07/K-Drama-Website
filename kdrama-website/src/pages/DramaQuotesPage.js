import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import quotesData from '../quotes.json'; // Import the JSON file
import './DramaQuotesPage.css';

function DramaQuotesPage() {
  const { dramaName } = useParams(); // Get drama name from URL
  const [drama, setDrama] = useState(null);

  useEffect(() => {
    const foundDrama = quotesData.find(drama =>
      drama.drama.toLowerCase() === dramaName.toLowerCase()
    );
    setDrama(foundDrama);
  }, [dramaName]);

  if (!drama) {
    return <Typography variant="h4">Drama not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h3" gutterBottom className="drama-name">
        Quotes from {drama.drama}
      </Typography>
      <img src={drama.image} alt={drama.drama} className="drama-image-center" />
      <Grid container spacing={3} className="quotes-container">
        {drama.quotes.map((quote, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper className="quote-card">
              <Typography variant="h6" gutterBottom>
                "{quote.quote}"
              </Typography>
              <Typography variant="body1">
                - {quote.character}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DramaQuotesPage;
