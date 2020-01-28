export const model = {

    verifyUser: (newSignIn) => {

        firebase.auth().signInWithEmailAndPassword(newSignIn.email, newSignIn.pass).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage)
        });
     
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
            }).catch(function(error){
              //An error happened.
            });
          });

    },
  

     ingresoGoogle: (googleUser) => {
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
      }else
      firebase.auth().signOut();
     }
}