import Home from './pages/home.js';
import SignIn from './pages/signin.js';
import Register from './pages/register.js';
import Profile from './pages/profile.js';
import UserData from './pages/userData.js';
import NotFound from './pages/notFound.js';
import { controler } from '../controler/index.js';


const components = {
    signIn: SignIn,
    register: Register,
    profile: Profile,
    home: Home,
    userData: UserData,
    notFound: NotFound
}

const userView = {

    initSignIn: () => {
        const userData = document.getElementById('signInForm');
        console.log(userData);

        userData.addEventListener('submit', (e) => {
          e.preventDefault();
          const newSignIn = {
            email: userData.userEmail.value,
            pass: userData.userPassword.value
          }
          console.log(newSignIn);
          userData.reset();
          controler.newSession(newSignIn);
          //crear un metodo  que mande newSignIn a controler y que model envie a firecloud
        })
     
    },


    initRegister: () => {
        const userInput = document.getElementById('register-form');
        console.log(userInput);

        userInput.addEventListener('submit', (e) => {
          e.preventDefault();
          const newUserFile = {
            userEmail: userInput.newEmail.value,
            userPass: userInput.newPassword.value
          }
          console.log(newUserFile);
          userInput.reset();
          controler.newUser(newUserFile);
        });
    },


    initUserInfo: () =>{
      const userInfo = document.getElementById('userDataForm');
      console.log(userInfo);

      userInfo.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUser = {
          userName: userInfo.userNickName.value,
          userPet: userInfo.userPet.value,
          userAbout: userInfo.aboutYou.value
        }
        console.log(newUser);
        userInfo.reset();
        controler.newUserInformation(newUser);
      });      
    },


    // initProfile: () => {

    // },


    initAccessGoogle: () => {
      const userGoogle = document.getElementById("button-Google");
      
      userGoogle.addEventListener("click", () => {
        controler.googleUser(userGoogle);
      });
    },


   

}



export { components, userView };