import React, {useState} from "react";
import {auth} from '../firebase';
import {useHistory} from 'react-router-dom';

const SignIn = () =>{
    //State to hold user input
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();

    //Fn to handle user sing-in
    const handleSignIn = async () => {
        try{
            //Sign in with provided email and password
            await auth.signInWithEmailAndPassword(email, password);
            //If successful, user redirected to chat room or any other page
            history.pushState('/chatroom');
        } catch (error) {
            //Handle sign-in errors
            console.error('Error signing in:', error.message);
            setErrorMessage('Invalid email and password');
        }
    };

    return (
        
        <div>
        <h2> Sign In </h2>
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
        placeholder="Password"/>
        <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
