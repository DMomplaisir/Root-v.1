var value = "";
//show that you submitted the signup --> var organizer;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
  authDomain: "root-d486a.firebaseapp.com",
  databaseURL: "https://root-d486a.firebaseio.com",
  projectId: "root-d486a",
  storageBucket: "",
  messagingSenderId: "980123833348"
};
// Initialize the default app
firebase.initializeApp(config);
// You can retrieve services via the defaultApp variable...

function showperson() {

document.getElementById("InitialSignUp").style.display="none";
value = document.querySelector('input[name = "person"]:checked').value;

    if (value == "citizen"){
      document.getElementById("Citizen").style.display="block";
      var organizer = document.getElementById("Organizer");
      document.body.removeChild(organizer);
      document.getElementById("caccount").addEventListener("click", turnt);
    }
    else {
      document.getElementById("Organizer").style.display="block";
      var citizen = document.getElementById("Citizen");
      document.body.removeChild(citizen);
      document.getElementById("oaccount").addEventListener("click", turnt);

    }



}





// if getelementbyid (account) = clicked, make new var account_type = citizen, and vice versa
// then add that as field to the account






function turnt(){

  function handleSignUp() {
    var email = document.getElementById("email").value;
    console.log(email);
    var password = document.getElementById("password").value;
     // if (email.length < 4) {
     //   alert('Please enter an email address.');
     //   return;
     // }
     // if (password.length < 4) {
     //   alert('Please enter a password.');
     //   return;
     // }
     // Sign in with email and pass.
     // [START createwithemail]
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       if (errorCode == 'auth/weak-password') {
         alert('The password is too weak.');
       } else {
         alert(errorMessage);
       }

     });


     function login(){
       var email = document.getElementById("email").value;
       var password = document.getElementById("password").value;
       // var email = document.getElementById('email').value;
       // var password = document.getElementById('password').value;
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
         var errorCode = error.code;
         var errorMessage = error.message;

       });
     }

     var name = document.getElementById('name').value;
     var phone = document.getElementById('phone').value;
     if (value == "citizen"){
       var interest = document.getElementById('interest').value;
     }
     else{
     var twitter = document.getElementById('twitter').value;
     var organization = document.getElementById('organ').value;
    }
     function createUserData(){
       user = firebase.auth().currentUser;
       if (user != null){
         var userId = user.uid;

         if(value == "citizen"){
           firebase.database().ref('users/' + userId).set({
             name: name,
             phone: phone,
             interest: interest,
             email: email
           });
         }

         else{
           firebase.database().ref('users/' + userId).set({
             name: name,
             phone: phone,
             twitter: twitter,
             organization: organ,
             email: email
           });
         }

       }
     else{console.log("thisaintwork");}

     }
     login();
     createUserData();
     // [END createwithemail]
   }
handleSignUp();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });




}
