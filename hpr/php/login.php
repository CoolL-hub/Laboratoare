<?php
    $name = $_POST["login"];
    $pass = $_POST["password"];
    
    $mysqli = new mysqli('localhost', 'root', '07122001', 'teh_web');
    
    
    $res_user = $mysqli->query("SELECT username FROM accounts WHERE username='".$name."'");

    if(mysqli_num_rows($res_user) != 0)
    {
        $res_pass = $mysqli->query("SELECT password FROM accounts WHERE username='".$name."'");

        $res = mysqli_fetch_array($res_pass);

        if (password_verify($pass, $res["password"])) {
            // Success!
            echo true;
        }
        else {
            // Invalid credentials
            echo false;
        }
    }
    else
    {
        //no user
        echo false;
    }
    $mysqli->close();
?>
