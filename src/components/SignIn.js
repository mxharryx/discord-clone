import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import { auth } from '../firebase';

const handleSignIn = async (email, password, setErrorMessage, history) => {
    try {
    await auth.signInWithEmailAndPassword(email, password);
    // If successful, user redirected to chat room or any other page
    history.push('/chatroom');
} catch (error) {
    // Handle sign-in errors
    console.error('Error signing in:', error.message);
    setErrorMessage('Invalid email and password');
}
};

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

  // Get the history object using useHistory hook
  const history = useHistory();

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
      <button onClick={() => handleSignIn(email, password, setErrorMessage, history)}>Sign In</button>
    </div>
  );
};

export default SignIn;
