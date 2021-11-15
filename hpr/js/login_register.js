function checkUserLogin() {
  user = document.getElementsByName("login")[0];
  pass = document.getElementsByName("password")[0];
  userErr = document.getElementById("incUser");
  passErr = document.getElementById("incPass");

  login = false;

  if (user.value.length < 5) {
    userErr.innerHTML = "Incorrect username length.";
    login = false;
  } else {
    userErr.innerHTML = "";
    login = true;
  }

  if (user.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    userErr.innerHTML = "";
    login = true;
  }

  if (pass.value.length < 8) {
    passErr.innerHTML = "Incorrect password length.";
    login = false;
  } else if (pass.value.match(/^(?=.*\d)(?=.*[a-z]).{8,50}$/)) {
    passErr.innerHTML = "";
    login = true;
  } else {
    passErr.innerHTML = "Password must contain letters and numbers.";
    login = false;
  }

  if (login) {
    alert("Success login!");
    window.location.href = "HTMLProject.html";
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
  register = false;

  if (user.value.length < 5) {
    userErr.innerHTML = "Needed length of minimum 6 characters.";
    register = false;
  } else {
    userErr.innerHTML = "";
    register = true;
  }

  if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailErr.innerHTML = "";
    register = true;
  } else {
    emailErr.innerHTML = "Incorrect e-mail format.";
    register = false;
  }

  if (pass.value.length < 8) {
    passErr.innerHTML = "Password must be at least 8 characters length.";
    register = false;
  } else if (pass.value.match(/^(?=.*\d)(?=.*[a-z]).{8,50}$/)) {
    passErr.innerHTML = "";
    register = true;
  } else {
    passErr.innerHTML = "Password must contain letters and numbers.";
    register = false;
  }

  if (pass2.value.length === 0) {
    register = false;
    pass2Err.innerHTML = "Can't be empty.";
  } else if (pass2.value != pass.value) {
    pass2Err.innerHTML = "Passwords do not match.";
    register = false;
  } else {
    pass2Err.innerHTML = "";
    register = true;
  }

  if (register) {
    //alert("Success register!");
    //window.location.href = "login.html";
  }
  
  // Manual AJAX
  if (register) {
    let data = 'login='+user.value + '&password=' + pass.value + '&email=' + email.value;

    let scr = new XMLHttpRequest();

    // scr.onreadystatechange = function () {
    //   if (scr.readyState === 4 && scr.status === 200) {
    //       console.log("yes");
    //     }
    // };

    scr.open("POST", "php/register.php", true);
    scr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //To send POST
    document.getElementById("register").reset();

    scr.send(data);
  }

  //if(register){
  //    data=$('#reg').serialize();
  //    $.ajax({
  //        type: "POST",
  //        url: 'php/register.php',
  //        data: data,
  //        success: function(){
  //            console.log("Yes!");
  //            document.getElementById("reg").reset();
  //            window.open("login.html");
  //        }
  //
  //    });
  //}
}
