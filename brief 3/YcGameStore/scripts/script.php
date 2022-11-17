<?php
    include 'connection.php';

    if(isset($_POST['sing-in']))  singIn();
    else if(isset($_POST['sing-up']))  singUp();



    function singIn(){
        include 'connection.php';
        $firstName = $_POST['first-name'];
        $lastName = $_POST['last-name'];
        $email = $_POST['email'];
        $password=$_POST['password'];
        

        $singInQuery = "INSERT INTO `admins` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES (NULL,' $firstName' ,' $lastName' , '$email' , '$password')";
        $result = mysqli_query($connection , $singInQuery);
        
        header('location: ../pages/dashboard.php');
    }

    function singUp(){
        // include 'connection.php';
        // $email = $_POST['email'];
        // $password = $_POST['password'];

        // $singUpQuery = " SELECT admin.password as pas ,admin.email as email FROM admins as admin WHERE admin.email = '$email' and admin.password= '$password';";
        // $result = mysqli_query($connection , $singUpQuery);

        // $adminData = mysqli_fetch_assoc($result);
        
        // if($adminData == NULL) header('location: ../index.php'); 
        // else header('location: ../pages/dashboard.php');

        header('location: ../pages/dashboard.php');

        

        

    }

?>