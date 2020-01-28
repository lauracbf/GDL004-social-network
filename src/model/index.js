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
     
      const email = newUserFile.userEmail;
      const pass = newUserFile.userPass;

        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
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

    registerInCloud: (newUserFile) => {

      let db = firebase.firestore();    
        db.collection("users").add({
          first: newUserFile.userEmail,
          last: newUserFile.userPass,
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
      }else
      firebase.auth().signOut();
    }
}