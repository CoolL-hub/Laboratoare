<?php 
    $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');

    $id = $_GET["id"];
    $name = $_POST["name"];
    $review = $_POST["review"];
    $mark = $_POST["mark"];

    $sql = "UPDATE site_feedback SET name='$name', review='$review', mark='$mark' WHERE id='$id'";
    $mysqli->query($sql);

    $mysqli->close();
?>