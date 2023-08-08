import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, database } from '../firebase';
import './signup.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [username, setUsername] = useState('');
    const [usernameAvailable, setUsernameAvailable] = useState(true);
    const navigate = useNavigate();

    const handleSignUp = async () => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        await addUserToDatabase(auth.currentUser.uid, username);
        navigate('/chatroom');
    } catch (error) {
        console.error('Error signing up:', error.message);
        setErrorMessage('Error creating account: ' + error.message);
    }
};

    const addUserToDatabase = async (uid, username) => {
        await database.ref(`users/${uid}`).set({ username });
};

    const checkUsernameAvailability = async (username) => {
        const snapshot = await database.ref('usernames').child(username).once('value');
        return !snapshot.exists();
};

    const handleUsernameChange = async (username) => {
        setUsername(username);
        if (username.trim() !== '') {
            const isAvailable = await checkUsernameAvailability(username);
            setUsernameAvailable(isAvailable);
    }
};


return (
    <div className="signup-container">
    <div className="signup-content">
    <div className="signup-header">
    <img src="https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png" alt="Discord Logo" className="signup-logo" />
    <h2>Sign Up</h2>
    </div>
    <div className="signup-form">
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
    <input
    type="text"
    value={username}
    onChange={(e) => handleUsernameChange(e.target.value)} 
    placeholder="Username"
    />
    {!usernameAvailable && <p className="error-message">Username is not available</p>}
    <button onClick={handleSignUp}>Sign Up</button>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <p>
    Already have an account? <Link to="/signin">Sign In</Link>
    </p>
    </div>
    </div>
    </div>
    );
};

export default SignUp;
