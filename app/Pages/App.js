import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'app/Pages/NavBar.js';
import AboutUs from 'app/Pages/Aboutus.js';
import Mission from 'app/Pages/Aboutus.js';
import Feature from 'app/Pages/Aboutus.js';
import Team from 'app/Pages/Team';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add a Home component if needed */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us" element={<Mission />} />
        <Route path="/about-us" element={<Feature />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default App;
