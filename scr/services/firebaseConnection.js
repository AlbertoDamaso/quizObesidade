import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyA8djs0K3vtMqubGF8TzlHvBSSY3GsMcPQ",
    authDomain: "quizobe-baba5.firebaseapp.com",
    databaseURL: "https://quizobe-baba5-default-rtdb.firebaseio.com",
    projectId: "quizobe-baba5",
    storageBucket: "quizobe-baba5.appspot.com",
    messagingSenderId: "269169073",
    appId: "1:269169073:web:c813faed9f616334d80d90"
};

if(!firebase.apps.length){
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;