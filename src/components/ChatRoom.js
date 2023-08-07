import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase';
import { sendMessage, listenForMessages } from '../chatUtils';

const ChatRoom = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const history = useNavigate();

    useEffect(()=>{
        //check if user is signed in
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
            } else{
                history.push('/signin');
            }
        });
        return()=>unsubscribe();
    }, [history]);

    useEffect(()=> {
        //listen for messages
        listenForMessages((messageData) => {
            setMessages((prevMessages) => [...prevMessages, messageData]);
        });
    }, []);

    const handleSendMessage =() =>{
        if (message.trim() !== '') {
            sendMessage(user.uid, message);
            setMessage('');
        }
    };

    const handleSignOut = async() =>{
        try{
            await auth.signOut();
            history('/signin');
        }catch(error){
            console.error('Error Signing out:', error.message);
        }
    }

    return (
        <div className="chatroom-container">
        <div className="chatroom-header">
        <h2>Welcome to the chat room!</h2>
        <button className="signout-button" onClick={handleSignOut}> Sign Out </button>
        </div>
        <div className="chatroom-messages">
        {messages.map((message) => (
            <div key={message.id} className="chatroom-message">
            <span className="message-user">{message.userId}:</span>
            <span className="message-content">{message.message}</span>
            </div>
        ))}
        </div>
        <div className="chatroom-input">
        <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
        />
        <button className="send-button" onClick={handleSendMessage}> Send </button>
        </div>
    </div>
    );
};

export default ChatRoom;