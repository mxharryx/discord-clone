import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../firebase';
import './signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    // If successful, user redirected to chat room or any other page
    navigate('/chatroom');
    } catch (error) {
      // Handle sign-in errors
      console.error('Error signing in:', error.message);
      setErrorMessage('Invalid email and password');
    }
  };

  return (
    <div className='signin-container'>
    <div className='signin-content'>
    <div className='signin-header'>
    <img src='https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png' alt='Discord Logo' className='signin-logo' />
    <h2> Sign In </h2>
    </div>
    <div className='signin-form'>
    <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSignIn}>Sign In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
    </div>
    </div>
    </div>
  );
};

export default SignIn;
