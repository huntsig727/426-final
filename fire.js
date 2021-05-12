import firebase from 'firebase';
require('firebase/auth');

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = 
  {
    apiKey: "AIzaSyAZIlUVrYvfQoM_0iG7qux8UIdOnLuRcIM",
    authDomain: "movieunc.firebaseapp.com",
    projectId: "movieunc",
    storageBucket: "movieunc.appspot.com",
    messagingSenderId: "881149909767",
    appId: "1:881149909767:web:7adcebfc38454d55b943a2",
    measurementId: "G-D3E38YJ4GV"
  };


  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  // firebase.analytics();