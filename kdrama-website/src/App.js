// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DramasPage from './pages/DramasPage';
import DramaDetailPage from './pages/DramaDetailPage';
import GenresPage from './pages/GenresPage';
import QuotesPage from './pages/QuotesPage'; // Import the QuotesPage component
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DramaQuotesPage from './pages/DramaQuotesPage';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dramas" element={<DramasPage />} />
        <Route path="/drama/:id" element={<DramaDetailPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/quotes" element={<QuotesPage />} /> {/* Add Quotes route */}
        <Route path="/quotes/:dramaName" element={<DramaQuotesPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
