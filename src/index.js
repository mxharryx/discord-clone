import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated import with Routes and Navigate
import './index.css';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ChatRoom from './components/ChatRoom';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes> {/* The Routes component wraps all your route configurations */}
        <Route path="/" element={<App />} /> {/* The root path "/" will render the App component */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="*" element={<Navigate to="/signin" />} /> {/* For any other unknown paths, redirect to the SignIn page */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
