function showperson() {
document.getElementById("Initial").style.display="none";
var value = document.querySelector('input[name = "person"]:checked').value;
    if (value == "citizen"){
      document.getElementById("Citizen").style.display="block";
      document.getElementById("Organizer").style.display="none";
      document.getElementById("caccount").addEventListener("click", turnt);
    }
    else {
      document.getElementById("Organizer").style.display="block";
      document.getElementById("Citizen").style.display="none";
      document.getElementById("oaccount").addEventListener("click", turnt);

    }



}





// if getelementbyid (account) = clicked, make new var account_type = citizen, and vice versa
// then add that as field to the account




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
    authDomain: "root-d486a.firebaseapp.com",
    databaseURL: "https://root-d486a.firebaseio.com",
    projectId: "root-d486a",
    storageBucket: "",
    messagingSenderId: "980123833348"
  };
  firebase.initializeApp(config);

  //Handles the sign up button press.
function turnt(){
   function handleSignUp() {
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     if (email.length < 4) {
       alert('Please enter an email address.');
       return;
     }
     if (password.length < 4) {
       alert('Please enter a password.');
       return;
     }
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
       console.log(error);
     });



     function login(){
       var email = document.getElementById('email').value;
       var password = document.getElementById('password').value;
       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(error);
       });
     }

     var user = firebase.auth().currentUser;
     var name = document.getElementById('name').value;
     var phone = document.getElementById('phone').value;
     var interest = document.getElementById('interest').value;
     var twitter = document.getElementById('twitter').value;
     var organization = document.getElementById('organ').value;

     function createUserData(){
       if (user != null){
         var userId = user.uid;

         if(value == "citizen"){
           firebase.database().ref('users/' + userId).set({
             name: name,
             phone: phone,
             interest: interest,
           });
         }

         else{
           firebase.database().ref('users/' + userId).set({
             name: name,
             phone: phone,
             twitter: twitter,
             organization: organ
           });
         }

       }

     }
     // [END createwithemail]
   }

handleSignUp();
login();
createUserData();




}
