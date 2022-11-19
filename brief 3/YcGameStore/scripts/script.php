<?php
    include 'connection.php';
    

    if(isset($_POST['sing-in']))  singUp();
    else if(isset($_POST['sing-up']))  singIn();

    

    if(isset($_POST['n_g_name'])) add();

    else if(isset($_POST['g_id'])) update();



    


    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    function singUp(){
        include 'connection.php';
        $firstName = $_POST['first-name'];
        $lastName = $_POST['last-name'];
        $email = $_POST['email'];
        $password=$_POST['password'];
        

        $singInQuery = "INSERT INTO `admins` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES (NULL,' $firstName' ,' $lastName' , '$email' , '$password')";
        $result = mysqli_query($connection , $singInQuery);
        
        header('location: ../pages/dashboard.php');
    }

    function singIn(){
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



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~crud
    function getGames(){
        include 'connection.php';

        $getGamesQuery = "SELECT * FROM `games`";
        $result = mysqli_query($connection , $getGamesQuery);

        return $result;

        
    }
    function add(){
        include 'connection.php';
        $gName =  $_POST['n_g_name'];
        $gCategory_id =  $_POST['n_g_category_id'];
        $gPrice =  $_POST['n_g_price'];
        $gQuantity =  $_POST['n_g_quntity'];

        $addGameQuery = "INSERT INTO `games` (`id`, `name`, `category_id`, `price`, `quantity`) VALUES (NULL, '$gName', '$gCategory_id', '$gPrice', '$gQuantity')";
        $result = mysqli_query($connection , $addGameQuery);
    }


    
    function update(){
        include 'connection.php';
        $gId =  $_POST['g_id'];
        $gName =  $_POST['g_name'];
        $gCategory_id =  $_POST['g_category_id'];
        $gPrice =  $_POST['g_price'];
        $gQuantity =  $_POST['g_quntity'];


        $updateGameQuery = "UPDATE `games` SET `name` = '$gName' , `category_id` = '$gCategory_id', `price` =  '$gPrice', 
        `quantity` =  '$gQuantity' WHERE  games.id = '$gId'";

        
        
        
        $result = mysqli_query($connection , $updateGameQuery);

    
        
    }


?>