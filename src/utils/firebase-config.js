import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBHB_2HBv2R3XqzJbOng8zWUz_H5kpVk2Y",
  authDomain: "react-moviedb-29ac2.firebaseapp.com",
  databaseURL: "https://react-moviedb-29ac2-default-rtdb.firebaseio.com",
  projectId: "react-moviedb-29ac2",
  storageBucket: "react-moviedb-29ac2.appspot.com",
  messagingSenderId: "305181906103",
  appId: "1:305181906103:web:d0a5078ab8f73a6ba9a932"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;