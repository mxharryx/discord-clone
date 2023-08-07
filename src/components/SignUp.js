import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async () => {
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        navigate('/chatroom');
    } catch (error) {
        console.error('Error signing up:', error.message);
        setErrorMessage('Error creating account: ' + error.message);
    }
};

return (
    <div>
    <h2>Sign Up</h2>
    {errorMessage && <p>{errorMessage}</p>}
    <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
        </form>
        <p>
        Already have an account? <Link to="/signin">Sign In</Link>
        </p>
    </div>
    );
};

export default SignUp;
