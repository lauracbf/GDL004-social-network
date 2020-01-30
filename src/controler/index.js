import { model } from '../model/index.js';
import { components, userView} from '../views/index.js';

export const controler = {
    initControlerSignIn: () => {
        userView.initSignIn()
    },

    newSession: (newSignIn) => {
      model.verifyUser(newSignIn); 
    }, 

    initControlerRegister: () =>{
        userView.initRegister()
    },

    newUser: (newUserFile) => {
      model.registerUser(newUserFile); 
      model.registerInCloud(newUserFile); 
    }, 

    initControlerGoogleUser: () => {
      userView.initAccessGoogle()
    },

    googleUser: (userGoogle) => {
      model.ingresoGoogle(userGoogle);
    },

    newUserInformation: (newUser) => {
      model.registerAbout(newUser)
    },

    initControlerAbout: () =>{
      userView.initUserInfo()
    },
  
    changeTmp: (hash) => {
      const sectionMain = document.getElementById('sectionPages');
      sectionMain.innerHTML = '';
  
      switch (hash) {
          case '':
          case '#':
          case '#/home':  
                sectionMain.appendChild(components.home());
              break;
          case '#/signin':
                sectionMain.appendChild(components.signIn());
                controler.initControlerSignIn()
                controler.initControlerGoogleUser()
              break;  
          case '#/register':
                sectionMain.appendChild(components.register())
                controler.initControlerRegister()
              break;
          case '#/profile':
                sectionMain.appendChild(components.profile());
              break;
          case '#/user-data':
                sectionMain.appendChild(components.userData());
                controler.initControlerAbout()
              break;
          default:
                sectionMain.appendChild(components.notFound());
      }
    }
  }