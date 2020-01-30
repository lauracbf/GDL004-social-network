import { controler } from './controler/index.js';

const initMain = ( ) => {
    controler.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controler.changeTmp(window.location.hash));
} 

window.addEventListener('load', initMain);


// Your web app's Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  



