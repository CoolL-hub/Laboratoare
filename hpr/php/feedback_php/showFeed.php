<?php
$idFromGet = $_GET['id'];

    $mysqli = mysqli_connect('localhost', 'root', '07122001', 'teh_web');
    $result = $mysqli->query("SELECT name, review FROM site_feedback WHERE id=$idFromGet");
    $rev = mysqli_fetch_array($result);
    $data = '<p align="center">'.$rev["name"].'</p>'.$rev["review"].'';
    mysqli_close($mysqli);

    echo $data;
?>