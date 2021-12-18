function checkUserLogin() {
  user = document.getElementsByName("login")[0];
  pass = document.getElementsByName("password")[0];
  userErr = document.getElementById("incUser");
  passErr = document.getElementById("incPass");

  loginU = false;
  passU = false;

  if (user.value.length < 5) {
    userErr.innerHTML = "Username needs to be at least 5 characters long!";
    loginU = false;
  }
  else if (user.value.match(/^[\w0-9]+$/)) {
    userErr.innerHTML = "";
    loginU = true;
  }
  else{
    userErr.innerHTML = "Incorrect username format";
  }

  if (pass.value.length < 8) {
    passErr.innerHTML = "Incorrect password length.";
    passU = false;
  } else if (pass.value.match(/^(?=.*\d)(?=.*[a-z]).{8,50}$/)) {
    passErr.innerHTML = "";
    passU = true;
  } else {
    passErr.innerHTML = "Password must contain letters and numbers.";
    passU = false;
  }

  if(loginU && passU){
    data=$('#login').serialize();
    $.ajax({
        type: "POST",
        url: 'php/login.php',
        data: data,
        success: function(resp){
          console.log(resp);
          if(resp == "false"){
            passErr.innerHTML = "Incorrect user or password";
          }
          else if(resp == "true")
          {
            alert("Successfull login!");
            window.location.href = "./index.html";
          }
        }
    });
  }
}

function checkUser() {
  user = document.getElementsByName("login")[0];
  email = document.getElementsByName("email")[0];
  pass = document.getElementsByName("password")[0];
  pass2 = document.getElementsByName("password2")[0];
  userErr = document.getElementById("userErr");
  emailErr = document.getElementById("emailErr");
  passErr = document.getElementById("passErr");
  pass2Err = document.getElementById("pass2Err");

  loginU = false;
  emailU = false;
  passU = false;
  pass2U = false;

  if (user.value.length < 5) {
    userErr.innerHTML = "Username needs to be at least 5 characters long!";;
    loginU = false;
  } else {
    userErr.innerHTML = "";
    loginU = true;
  }

  if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailErr.innerHTML = "";
    emailU = true;
  } else {
    emailErr.innerHTML = "Incorrect e-mail format.";
    emailU = false;
  }

  if (pass.value.length < 8) {
    passErr.innerHTML = "Password must be at least 8 characters length.";
    passU = false;
  } else if (pass.value.match(/^(?=.*\d)(?=.*[a-z]).{8,50}$/)) {
    passErr.innerHTML = "";
    passU = true;
  } else {
    passErr.innerHTML = "Password must contain letters and numbers.";
    passU = false;
  }

  if (pass2.value.length === 0) {
    pass2Err.innerHTML = "Can't be empty.";
    pass2U = false;
  } else if (pass2.value != pass.value) {
    pass2Err.innerHTML = "Passwords do not match.";
    pass2U = false;
  } else{
    pass2Err.innerHTML = "";
    pass2U = true;
  }

  if(loginU && emailU && passU && pass2U){
    data=$('#register').serialize();
    $.ajax({
        type: "POST",
        url: 'php/register.php',
        data: data,
        success: function(resp){
          if(resp == "false")
            userErr.innerHTML = "User already exists!";
          else if(resp == "true"){
            alert("Successfull registration!");
            window.location.href = "./login.html";
          }
        }
    });
  }
}
