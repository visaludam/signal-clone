import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfnx2wXWsStmHwTvKyJxbevAmvvP-yVj4",
  authDomain: "signal-prvmsg-clone.firebaseapp.com",
  projectId: "signal-prvmsg-clone",
  storageBucket: "signal-prvmsg-clone.appspot.com",
  messagingSenderId: "694871169663",
  appId: "1:694871169663:web:e4d012f82fe75bfe647d4a"
};

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth}