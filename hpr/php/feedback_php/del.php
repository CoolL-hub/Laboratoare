<?php
$idFromGet = $_GET['id'];

    $mysqli = mysqli_connect('localhost', 'root', '07122001', 'teh_web');
    $mysqli->query("DELETE FROM site_feedback WHERE id=$idFromGet");
    mysqli_close($mysqli);
?>