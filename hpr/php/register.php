<?php
    $name = $_POST["login"];
    $pass = $_POST["password"];
    $email = $_POST["email"];

    $pass = password_hash($pass, PASSWORD_DEFAULT);
    
    $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');
    
    $res = $mysqli->query("SELECT username FROM accounts WHERE username='".$name."'");

    if(mysqli_num_rows($res) != 0)
        echo false;
    else
    {
        $mysqli->query("INSERT INTO accounts VALUES(NULL, '$name', '$pass', '$email')");
        echo true;
    }
    $mysqli->close();
?>