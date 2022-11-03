<?php
    
    //CONNECT TO MYSQL DATABASE USING MYSQLI

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databasename = "Youcodescumboard";
    $connection = mysqli_connect($servername , $username , $password , $databasename);

    if(!$connection) 
        die("connection Failled :" . mysqli_connect_error()); //die : function stop code and print message 
    
?>