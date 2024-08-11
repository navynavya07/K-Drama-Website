import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Paper, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import famousQuotesData from '../famous-quotes.json'; // Import the JSON file for famous quotes
import quotesData from '../quotes.json'; // Import the JSON file for all quotes
import './QuotesPage.css'; // Import the CSS file for QuotesPage

function QuotesPage() {
  const [famousQuotes, setFamousQuotes] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFamousQuotes(famousQuotesData);
    setAllQuotes(quotesData);
  }, []);

  // Filter dramas based on search term
  const filteredDramas = allQuotes.filter(drama =>
    drama.drama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom className="famous-quotes">
        Famous K-Drama Quotes
      </Typography>
      <TextField
        label="Search by Drama"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid container spacing={3}>
        {/* Famous Quotes Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom className="famous-quotes">
            Famous Quotes
          </Typography>
          <Grid container spacing={2}>
            {famousQuotes.slice(0, 6).map((quote, index) => (
              <Grid item xs={12} sm={6} md={4} key={quote.id}>
                <Paper className="quotes-page-quote-card">
                  <Typography variant="h6" gutterBottom>
                    "{quote.quote}"
                  </Typography>
                  <Typography variant="body1">
                    - {quote.character}, {quote.drama}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Drama Images and "See Quotes" Button Section */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Explore More Quotes from Dramas
          </Typography>
          <Grid container spacing={2}>
            {filteredDramas.map((drama) => (
              <Grid item xs={12} sm={6} md={3} key={drama.id}>
                <Paper className="quotes-page-drama-card">
                  <img src={drama.image} alt={drama.drama} className="quotes-page-drama-image" />
                  <Typography variant="h7" className="quotes-page-drama-title">
                    {drama.drama}
                  </Typography>
                  <Link to={`/quotes/${drama.drama.toLowerCase()}`}>
                    <Button variant="contained" size="small" className="quotes-page-see-quotes-btn">
                      See Quotes
                    </Button>
                  </Link>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default QuotesPage;
