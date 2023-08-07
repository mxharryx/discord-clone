import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';
import { sendMessage, listenForMessages } from '../chatUtils';

const ChatRoom = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const history = useHistory();

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
        //listenm for messages
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

    return (
        <div>
        <h2>Welcome to the chat room!</h2>
        <div>
        {messages.map((message)=>(
            <div key={message.id}>
            <p>{message.userId}: {message.message}</p>
            </div>
        ))}
        </div>
        <div>
        <input
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Type your message here"
        />
        <button onClick={handleSendMessage}>Send</button>
        </div>
        </div>
    );
};

export default ChatRoom;