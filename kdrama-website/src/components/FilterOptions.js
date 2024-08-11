import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import './FilterOptions.css';

function FilterOptions({ setFilteredDramas, allDramas }) {
  const [genre, setGenre] = useState('');

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);

    // Call the parent function to handle filtering
    const filteredDramas = selectedGenre
      ? allDramas.filter(drama =>
          drama.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        )
      : allDramas;

    setFilteredDramas(filteredDramas); // Passing filtered array directly
  };

  return (
    <Grid container spacing={2} alignItems="center" className="filter-options-container">
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth className="filter-form-control">
          <InputLabel className="filter-label">Genre</InputLabel>
          <Select
            value={genre}
            onChange={handleGenreChange}
            className="filter-select"
          >
            <MenuItem value="">All</MenuItem> {/* Resets the genre filter to show all dramas */}
            <MenuItem value="Romance" className="filter-menu-item">Romance</MenuItem>
            <MenuItem value="Comedy" className="filter-menu-item">Comedy</MenuItem>
            <MenuItem value="Thriller" className="filter-menu-item">Thriller</MenuItem>
            <MenuItem value="Drama" className="filter-menu-item">Drama</MenuItem>
            <MenuItem value="Slice of Life" className="filter-menu-item">Slice of Life</MenuItem>
            <MenuItem value="Action" className="filter-menu-item">Action</MenuItem>
            <MenuItem value="Fantasy" className="filter-menu-item">Fantasy</MenuItem>
            <MenuItem value="Crime" className="filter-menu-item">Crime</MenuItem>
            {/* Add more genres as needed */}
          </Select>
        </FormControl>
      </Grid>
      {/* Add more filters if needed */}
    </Grid>
  );
}

export default FilterOptions;
