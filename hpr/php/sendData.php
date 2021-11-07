<?php 
    $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');

    $name = $_POST["name"];
    $feed = $_POST["review"];
    $mark = $_POST["mark"];

    $sql = "INSERT INTO site_feedback VALUES(NULL, '$name', '$feed', $mark);";
    $mysqli->query($sql);

    $mysqli->close();
?>