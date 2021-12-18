<?php

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$name = $pass = $resp = "";
$passU = $loginU = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!empty($_POST["login"]) and !empty($_POST["password"])) {
        $name = test_input($_POST["login"]);
        $pass = test_input($_POST["password"]);

        if (strlen($name) < 5) {
            $resp .= "Username needs to be at least 5 characters long! ";
            $loginU = false;
        } else if (preg_match("/^[\w0-9]+$/i", $name)) {
            $resp .= "Correct username format! ";
            $loginU = true;
        } else {
            $loginU = false;
            $resp .= "Incorrect username format, only numbers, underscore and english letters! ";
        }

        if (strlen($pass) < 8) {
            $resp .= "Password needs to be at least 8 characters long! ";
            $passU = false;
        } else if (preg_match("/^(?=.*\d)(?=.*[a-z]).{8,50}$/i", $pass)) {
            $resp .= "Correct password format! ";
            $passU = true;
        } else {
            $resp .= "Password must contain letters and numbers! ";
            $passU = false;
        }
        if ($passU and $loginU) {
            $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');

            $res_user = $mysqli->query("SELECT username FROM accounts WHERE username='" . $name . "'");

            if (mysqli_num_rows($res_user) != 0) {
                $res_pass = $mysqli->query("SELECT password FROM accounts WHERE username='" . $name . "'");

                $res = mysqli_fetch_array($res_pass);

                if (password_verify($pass, $res["password"])) {
                    // Success!
                    $resp = "true";
                } else {
                    // Invalid credentials
                    $resp = "false";
                }
            } else {
                //no user
                $resp = "false";
            }
            $mysqli->close();
        } else {
            $resp .= "Incorrect username or password! ";
        }
    } else {
        $resp .= "Fields can't be empty! ";
    }
} else {
    $resp .= "Not a POST method!";
}

echo $resp;
