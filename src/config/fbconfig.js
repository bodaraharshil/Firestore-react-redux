import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyByUGAczev1UbVK_YJ77caTHfXZ0IMLOBg",
  authDomain: "react-fire-9705b.firebaseapp.com",
  projectId: "react-fire-9705b",
  storageBucket: "react-fire-9705b.appspot.com",
  messagingSenderId: "23504310040",
  appId: "1:23504310040:web:64db356d65b5c71271586d",
  measurementId: "G-DT0LF2MNCW"
};

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSanpshots:true })

export default firebase;