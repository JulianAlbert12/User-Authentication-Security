import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import LandingPage from './components/LandingPage';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route exact path="/" element={<LandingPage />} /> {/* Replace component prop with element */}
        <Route exact path="/login" element={<Login />} /> {/* Replace component prop with element */}
      </Routes> {/* Replace Switch with Routes */}
    </Router>
  );
};

export default App;