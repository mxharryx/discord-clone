import { database } from './firebase';

export const sendMessage = (userId, message) => {
    database.ref('messages').push({
        userId,
        message,
        timestamp: Date.now(),
    });
};

export const listenForMessages = (callback) => {
    database.ref('messages').on('child_added', (snapshot) => {
        const messageData = snapshot.val();
        callback({
            id: snapshot.key,
            userId: messageData.userId,
            message: messageData.message,
            timestamp: messageData.timestamp,
        });
    });
};