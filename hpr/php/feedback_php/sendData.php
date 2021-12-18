<?php

$name = $_GET["name"];
$feed = $_GET["review"];
$mark = $_GET["mark"];

if (!empty($name) and !empty($feed) and !empty($mark)) {
    if($mark >= 0 and $mark <= 10){
        $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');
        $sql = "INSERT INTO site_feedback VALUES(NULL, '$name', '$feed', $mark);";
        $mysqli->query($sql);

        $mysqli->close();

        echo "Data sent!";
    }   
    else{
        echo "Mark is lower or greater than 10!";
    }
}
else{
    echo "Values can't be empty! ";
}