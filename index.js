
function showsign(){
  document.getElementById("Initial").style.display="none";
  value = document.querySelector('input[name = "sign"]:checked').value;

  if (value == "signin"){
    window.location.replace("signin.html");
  }
  if (value == "signup"){
    window.location.replace("signup.html");
  }
}
