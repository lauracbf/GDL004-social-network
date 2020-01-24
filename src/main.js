import { controler } from '.controler/index.js';

example();

const initMain = ( ) => {
    controlador.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controlador.changeTmp(window.location.hash));
} 

window.addEventListener('load', initMain);


