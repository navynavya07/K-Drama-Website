import React from 'react';
import { Box, Typography } from '@mui/material';
import './CastAndCrew.css';

function CastAndCrew({ cast }) {
  return (
    <Box className="cast-section">
      <Typography className="cast-title">Cast and Crew</Typography>
      <Box className="cast-container">
        {cast.map((member, index) => (
          <Box key={index} className="cast-member">
            <img src={member.image} alt={member.name} className="cast-member-image" />
            <Typography className="cast-member-name">{member.name}</Typography>
            <Typography className="cast-member-role">{member.role}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CastAndCrew;
