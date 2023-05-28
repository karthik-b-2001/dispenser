// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from"firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Rg9eJbcLL5lbW3iEdRC_ZoicJLalDVo",
  authDomain: "lcde-91161.firebaseapp.com",
  databaseURL: "https://lcde-91161-default-rtdb.firebaseio.com",
  projectId: "lcde-91161",
  storageBucket: "lcde-91161.appspot.com",
  messagingSenderId: "534639323082",
  appId: "1:534639323082:web:7c813d903a18c31cd5d133",
  measurementId: "G-CGR7MGYN0Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
