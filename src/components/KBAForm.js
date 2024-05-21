// src/components/KBAForm.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const KBAForm = () => {
  const location = useLocation();
  const { name, email, password } = location.state;
  const [kbaData, setKbaData] = useState({
    question1: '',
    answer1: '',
    question2: '',
    answer2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKbaData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the KBA data and create the account securely
    console.log('Account created:', { name, email, password, kbaData });
  };

  return (
    <div className="login-container">
      <h2>Knowledge-Based Authentication</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question1">Security Question 1:</label>
          <input type="text" id="question1" name="question1" value={kbaData.question1} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="answer1">Answer 1:</label>
          <input type="text" id="answer1" name="answer1" value={kbaData.answer1} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="question2">Security Question 2:</label>
          <input type="text" id="question2" name="question2" value={kbaData.question2} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="answer2">Answer 2:</label>
          <input type="text" id="answer2" name="answer2" value={kbaData.answer2} onChange={handleChange} />
        </div>
        <button type="submit">Complete Account Setup</button>
      </form>
    </div>
  );
};

export default KBAForm;