var config = {
  apiKey: "AIzaSyCzniP0Wu1UpfyFwcs3w6PSvE95bMdA0zM",
  authDomain: "root-d486a.firebaseapp.com",
  databaseURL: "https://root-d486a.firebaseio.com",
  projectId: "root-d486a",
  storageBucket: "",
  messagingSenderId: "980123833348"
};
var otherApp = firebase.initializeApp(config);

function revealperson(){
  document.getElementById("InitialSignIn").style.display="none";
  value = document.querySelector('input[name = "person"]:checked').value;

  if(value == "citizen"){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    login(email, password);
    window.location.replace("citizen_intro.html");

  }

  else{
    login();
    window.location.replace("organizer_intro.html");

  }

  function login(email,password){
    // var email = document.getElementById('email').value;
    // var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
  }
}
