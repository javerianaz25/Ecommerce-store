import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../src/components/Navbar/navbar'
import Footer from '../src/components/Footer/footer'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered email and password match your predefined values.
    if (email === 'mosi@gmail.com' && password === '12345') {
      navigate('/dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }

  return (
    <>
    <Navbar/>
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>Already have an account?</p>
        <button className="login-button">Register</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
