import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField } from '@mui/material';
import DramaCard from '../components/DramaCard';
import FilterOptions from '../components/FilterOptions';
import './DramasPage.css'; // Ensure this CSS file exists
import allDramas from '../drama.json';

function DramasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDramas, setFilteredDramas] = useState(allDramas);

  useEffect(() => {
    const filtered = allDramas.filter((drama) => {
      const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
    setFilteredDramas(filtered);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <TextField
        label="Search K-Dramas"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <FilterOptions setFilteredDramas={setFilteredDramas} allDramas={allDramas} />
      <Grid container spacing={3}>
        {filteredDramas.map((drama) => (
          <Grid item xs={12} sm={6} md={4} key={drama.id}>
            <DramaCard drama={drama} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DramasPage;
