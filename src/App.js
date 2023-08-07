import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to My Chat App!
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      {/* Add common footer or other components */}
    </div>
  );
}

export default App;
