<?php
    include 'connection.php';

    if(isset($_POST['sing-in']))  singIn();
    else if(isset($_POST['sing-up']))  singUp();



    function singIn(){
        include 'connection.php';
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password=$_POST['password'];
        

        $singInQuery = "INSERT INTO `admins` (`id`, `name`, `email`, `password`) VALUES (NULL,' $name' , '$email' , '$password')";
        $result = mysqli_query($connection , $singInQuery);
        
        header('location: ../index.php');
    }

    function singUp(){
        include 'connection.php';
        $email = $_POST['email'];
        $password = $_POST['password'];

        $singUpQuery = " SELECT admin.password as pas ,admin.email as email FROM admins as admin WHERE admin.email = '$email' and admin.password= '$password';";
        $result = mysqli_query($connection , $singUpQuery);

        $adminData = mysqli_fetch_assoc($result);
        
        if($adminData == NULL)  echo "you haven't an account";
        else echo "welcome";

        

        

    }

?>