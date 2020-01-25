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
  
}