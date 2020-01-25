import { controler } from './controler/index.js';

const initMain = ( ) => {
    controler.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controler.changeTmp(window.location.hash));
} 

window.addEventListener('load', initMain);


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA87a5JfZWcgDb_HlHIKR5-TDIF8i52uaI",
    authDomain: "fir-usuarios-3375c.firebaseapp.com",
    databaseURL: "https://fir-usuarios-3375c.firebaseio.com",
    projectId: "fir-usuarios-3375c",
    storageBucket: "fir-usuarios-3375c.appspot.com",
    messagingSenderId: "772408234103",
    appId: "1:772408234103:web:bdae0a46a8d99f9f177672"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//     apiKey: '"AIzaSyA87a5JfZWcgDb_HlHIKR5-TDIF8i52uaI"',
//     authDomain: 'fir-usuarios-3375c.firebaseapp.com',
//     projectId: 'fir-usuarios-3375c'
//   });
  
  var db = firebase.firestore();


