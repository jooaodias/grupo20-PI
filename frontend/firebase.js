import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDC9EiWRdyA9yeMhZyiHtZFYlHOaKUk82E",
    authDomain: "grupo20-pi.firebaseapp.com",
    projectId: "grupo20-pi",
    storageBucket: "grupo20-pi.appspot.com",
    messagingSenderId: "353678834923",
    appId: "1:353678834923:web:d4e7a3f79107312f2a92ae"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
