import React from 'react';
import './CSS/Login.css';

const CreateAccount = () => {
  return (
    <div className="login-container"> {/* Use the same CSS class */}
      <h2>Create Account</h2>
      <form className="login-form"> {/* Use the same CSS class */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;