import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import { auth } from '../firebase';

const handleSignUp = async (email, password, setErrorMessage, history) => {
    try {
    await auth.createUserWithEmailAndPassword(email, password);
    // If successful, user redirected to chat room or any other page
    history.push('/chatroom');
} catch (error) {
    // Handle sign-up errors
    console.error('Error signing up:', error.message);
    setErrorMessage('Error creating account: ' + error.message);
}
};

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    
    return (
    <div>
    <h2>Sign Up</h2>
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
        <button onClick={() => handleSignUp(email, password, setErrorMessage, history)}>Sign Up</button>
    </div>
    );
};

export default SignUp;
