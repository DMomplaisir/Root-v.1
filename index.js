
function showsign(){
  value = document.querySelector('input[name = "sign"]:checked').value;
  document.getElementById("Initial").style.display="none";


  if (value == "signin"){
    window.location.replace("signin.html");
  }
  if (value == "signup"){
    window.location.replace("signup.html");
  }
}
