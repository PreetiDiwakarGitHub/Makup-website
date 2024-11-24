import React from 'react';
import './Login.css'; // Optional: Add CSS for styling

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
