import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import KBAForm from './components/KBAForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
        <Route exact path="/kba" element={<KBAForm />} />
      </Routes>
    </Router>
  );
};

export default App;