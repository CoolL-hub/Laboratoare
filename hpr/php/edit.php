<?php
$idFromGet = $_GET['id'];

    $mysqli = mysqli_connect('localhost', 'root', '07122001', 'teh_web');
    $result = $mysqli->query("SELECT name, review, mark FROM site_feedback WHERE id=$idFromGet");
    $data = mysqli_fetch_array($result);
    
    $data_arr['id'] = $idFromGet;
    $data_arr['name'] = $data['name'];
    $data_arr['review'] = $data['review'];
    $data_arr['mark'] = $data['mark'];

    mysqli_close($mysqli);

    echo json_encode($data_arr);
?>