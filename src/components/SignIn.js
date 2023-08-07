import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from '../firebase';

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
    <div>
      <h2>Sign In</h2>
      {errorMessage && <p>{errorMessage}</p>}
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
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
