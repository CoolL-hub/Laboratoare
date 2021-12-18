<?php

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$name = $pass = $pass2 = $email = $resp = "";
$loginU = $emailU = $passU = $pass2U = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!empty($_POST["login"]) and
        !empty($_POST["password"]) and
        !empty($_POST["password2"]) and !empty($_POST["email"])) {

        $name = test_input($_POST["login"]);
        $pass = test_input($_POST["password"]);
        $pass2 = test_input($_POST["password2"]);
        $email = test_input($_POST["email"]);


        if (strlen($name) < 5) {
            $resp .= "Username needs to be at least 5 characters long! ";;
            $loginU = false;
        } else {
            $loginU = true;
        }

        if (preg_match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/i", $email)) {
            $resp .= "Correct email format! ";
            $emailU = true;
        } else {
            $resp .= "Incorrect e-mail format! ";
            $emailU = false;
        }

        if (strlen($pass) < 8) {
            $resp .= "Password must be at least 8 characters length! ";
            $passU = false;
        } else if (preg_match("/^(?=.*\d)(?=.*[a-z]).{8,50}$/i", $pass)) {
            $resp .= "Correct password format! ";
            $passU = true;
        } else {
            $resp .= "Password must contain letters and numbers! ";
            $passU = false;
        }

        if (strlen($pass2) == 0) {
            $resp .= "Password confirmation can't be empty! ";
            $pass2U = false;
        } else if ($pass2 != $pass) {
            $resp .= "Passwords do not match! ";
            $pass2U = false;
        } else {
            $pass2U = true;
        }
        if ($loginU and $emailU and $passU and $pass2U) {
            $pass = password_hash($pass, PASSWORD_DEFAULT);

            $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');

            $res = $mysqli->query("SELECT username FROM accounts WHERE username='" . $name . "'");

            if (mysqli_num_rows($res) != 0)
                $resp = "false";
            else {
                $mysqli->query("INSERT INTO accounts VALUES(NULL, '$name', '$pass', '$email')");
                $resp = "true";
            }
            $mysqli->close();
        } else {
            $resp .= "Incorrect field value! ";
        }
    } else {
        $resp .= "Fields can't be empty! ";
    }
}
else{
    $resp .= "Not a POST method! ";
}
echo $resp;
