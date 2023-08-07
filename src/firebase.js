import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyCqLoefbETUf0A2gg9VeOgl74zeJSc6Y68",
  authDomain: "discord-clone-a0153.firebaseapp.com",
  databaseURL: "https://discord-clone-a0153-default-rtdb.firebaseio.com",
  projectId: "discord-clone-a0153",
  storageBucket: "discord-clone-a0153.appspot.com",
  messagingSenderId: "283667297886",
  appId: "1:283667297886:web:c654732265d22a2a2026cf",
  measurementId: "G-Q0BC5ZBSW7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();