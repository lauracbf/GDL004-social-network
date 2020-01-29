export const model = {

    verifyUser: (newSignIn) => {

        firebase.auth().signInWithEmailAndPassword(newSignIn.email, newSignIn.pass).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage)
        }).then( () => {
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var emailVerified = user.emailVerified;
        
              if(emailVerified===true){
                location.hash = '/profile';
              }else{
                alert('Verifica tu correo');
                location.hash = '/signin';
              }
        
            } else {
              // User is signed out.
             console.log('no logueado');
            }
        });
        });
     //Observador??
    },
    

    registerUser: (newUserFile) => {

        firebase.auth().createUserWithEmailAndPassword(newUserFile.userEmail, newUserFile.userPass).catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(errorMessage)
          })
          .then(function(){
                let user = firebase.auth().currentUser;
                user.sendEmailVerification().then(function(){
                    //Email sent. 
                    alert('Verifica tu correo');  
                    
            }).catch(function(error){
              //An error happened.
            });
          });  
    },


    registerAbout: (newUserInfo) =>{

      let db = firebase.firestore();    
        db.collection("profile").add({
          NickName: newUserInfo.userName,
          Pet: newUserInfo.userPet,
          About: newUserInfo.userAbout
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            alert('Ahora puedes iniciar sesión');
            location.hash = '/signin';

        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    },


    registerInCloud: (newUserFile) => {

      let db = firebase.firestore();    
        db.collection("users").add({
          Email: newUserFile.userEmail,
          Password: newUserFile.userPass,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    },

    ingresoGoogle: (userGoogle) => {

      if(!firebase.auth().currentUser){

        var provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          // ...
        }).catch(function(error){
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if(errorCode==='auth/account-exists-with-different-credential'){
            alert("Es el mismo usuario");
          }
        });
      }else{
        firebase.auth().signOut();
      } 
    }
}