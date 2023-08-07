import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import './Home.css';


const Home=() => {
    return(
        <div className='home-container'>
        <nav className='navbar'>
        <img src={logo} className="navbar-logo" alt="logo" />
        <ul className="navbar-links">
        <li>
        <Link to="/signin">Sign In</Link>
        </li>
        <li>
        <Link to="/signup">Sign Up</Link>
        </li>
        </ul>
        </nav>

        <div className='main-content'>
        <h1> Welcome to my Chat App!</h1>
        <p> Join the community and start chatting </p>
        </div>

        <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} My Chat App. </p>
        </footer>
        </div>
    );
};

export default Home;