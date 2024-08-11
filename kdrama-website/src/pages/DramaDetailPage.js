import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import CastAndCrew from '../components/CastAndCrew';
import RelatedDramas from '../components/RelatedDramas';
import dramaData from '../drama.json'; // Ensure the path to your JSON file is correct
import './DramaDetailPage.css'; // Import the CSS file

function DramaDetailPage() {
  const { id } = useParams();
  const drama = dramaData.find(drama => drama.id === parseInt(id));

  if (!drama) {
    return <Typography variant="h5">Drama not found</Typography>;
  }

  return (
    <Container className="drama-container">
      <Typography variant="h4" className="drama-header" gutterBottom>
        {drama.title}
      </Typography>
      <Box className="drama-info">
        <Box
          component="img"
          src={drama.image}
          alt={drama.title}
          className="drama-image"
        />
        <Box className="drama-details">
          <Typography variant="h6">Genre: {drama.genre}</Typography>
          <Typography variant="h6">Rating: {drama.rating}</Typography>
          <Typography variant="h6">Year: {drama.year}</Typography>
          <Typography variant="h6">Episodes: {drama.episodes}</Typography>
          <Typography variant="h6">Network: {drama.network}</Typography>
          <Typography className="drama-synopsis" paragraph>
            {drama.synopsis}
          </Typography>
        </Box>
      </Box>
      {drama.trailer && (
        <Box className="trailer-container">
          <Typography variant="h6" gutterBottom>
            Watch the Trailer
          </Typography>
          <iframe
            width="100%"
            height="315"
            src={drama.trailer}
            title={`${drama.title} Trailer`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      )}
      <CastAndCrew cast={drama.cast} />
      <RelatedDramas related={drama.related} />
    </Container>
  );
}

export default DramaDetailPage;
