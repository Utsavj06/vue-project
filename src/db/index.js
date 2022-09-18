import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADf2l6QnhN6y-aU77zL86qTqWDtjFZteA",
  authDomain: "userslist-5bf68.firebaseapp.com",
  projectId: "userslist-5bf68",
  storageBucket: "userslist-5bf68.appspot.com",
  messagingSenderId: "721937279385",
  appId: "1:721937279385:web:957268026a945bd7c40b08"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}