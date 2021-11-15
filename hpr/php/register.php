<?php
    $name = $_POST["login"];
    $pass = $_POST["password"];
    $email = $_POST["email"];

    $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');
    $mysqli->query("INSERT INTO accounts VALUES(NULL, '$name', '$pass', '$email')");

    $mysqli->close();
?>
