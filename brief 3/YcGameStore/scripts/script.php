<?php
    include 'connection.php';
     //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();
    

    if(isset($_POST['sing-in']))  singUp();
    else if(isset($_POST['sing-up']))  singIn();

    if(isset($_POST['request'])){
        if($_POST['request'] == "add") add();
        else if($_POST['request'] == "update") update();
        else if($_POST['request'] == "delete") delete();

    }



    


    
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~admin


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
        mysqli_close($connection);

        return $result;

    }

    function add(){
        include 'connection.php';
        $gName =  $_POST['g_name'];
        $gCategory_id =  $_POST['g_category_id'];
        $gPrice =  $_POST['g_price'];
        $gQuantity =  $_POST['g_quntity'];

        $addGameQuery = "INSERT INTO `games` (`id`, `name`, `category_id`, `price`, `quantity`) VALUES (NULL, '$gName', '$gCategory_id', '$gPrice', '$gQuantity')";
        $result = mysqli_query($connection , $addGameQuery);
        
        $last_id = mysqli_insert_id($connection);

        $getGamesQuery = "SELECT * FROM `games` WHERE  games.id = '$last_id' ";
        $result = mysqli_query($connection , $getGamesQuery);
        $row = mysqli_fetch_assoc($result);

        $data["id"] = $row["id"];
        $data["name"] = $row["name"];
        $data["category_id"] = $row["category_id"];
        $data["price"] = $row["price"];
        $data["quantity"] = $row["quantity"];

        // statistic


        $data["gamesNumber"] = mysqli_num_rows(getGames());

        $sql= mysqli_query($connection , "SELECT MAX(price) AS max FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["maxPrice"] =   $res['max'];

        $sql= mysqli_query($connection , "SELECT MIN(price) AS min FROM games");
                $res = mysqli_fetch_array( $sql);

        $data["minPrice"] = $res['min'];


        $sql= mysqli_query($connection , "SELECT SUM(quantity) AS stock FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["stock"] = $res['stock'];

        

        echo json_encode($data);

        mysqli_close($connection);


    }

    function update(){

        include 'connection.php';
        $gId =  $_POST['g_id'];
        $gName =  $_POST['g_name'];
        $gCategory_id =  $_POST['g_category_id'];
        $gPrice =  $_POST['g_price'];
        $gQuantity =  $_POST['g_quntity'];

        
        // send data to database
        $updateGameQuery = "UPDATE games SET games.name = '$gName' , games.category_id = '$gCategory_id', games.price =  '$gPrice' , games.quantity = '$gQuantity' WHERE  games.id = '$gId' ";
        $result = mysqli_query($connection , $updateGameQuery);
        // get data (1 row ) from database
        $getGamesQuery = "SELECT * FROM `games` WHERE  games.id = '$gId' ";
        $result = mysqli_query($connection , $getGamesQuery);
        $row = mysqli_fetch_assoc($result);

        $data["id"] = $row["id"];
        $data["name"] = $row["name"];
        $data["category_id"] = $row["category_id"];
        $data["price"] = $row["price"];
        $data["quantity"] = $row["quantity"];



        // statistic


        $data["gamesNumber"] = mysqli_num_rows(getGames());

        $sql= mysqli_query($connection , "SELECT MAX(price) AS max FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["maxPrice"] =   $res['max'];

        $sql= mysqli_query($connection , "SELECT MIN(price) AS min FROM games");
                $res = mysqli_fetch_array( $sql);

        $data["minPrice"] = $res['min'];


        $sql= mysqli_query($connection , "SELECT SUM(quantity) AS stock FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["stock"] = $res['stock'];

        
        


        echo json_encode($data);

        mysqli_close($connection);


    
        
    }
    
    function delete(){
        include 'connection.php';

        $gId = $_POST['g_id'];

        $deleteGameQuery = "DELETE FROM `games` WHERE `games`.`id` = '$gId'";
        
        $result = mysqli_query($connection , $deleteGameQuery);


        // statistic

        $data["gamesNumber"] = mysqli_num_rows(getGames());

        $sql= mysqli_query($connection , "SELECT MAX(price) AS max FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["maxPrice"] =   $res['max'];

        $sql= mysqli_query($connection , "SELECT MIN(price) AS min FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["minPrice"] = $res['min'];


        $sql= mysqli_query($connection , "SELECT SUM(quantity) AS stock FROM games");
        $res = mysqli_fetch_array( $sql);

        $data["stock"] = $res['stock'];


        

        
        echo json_encode($data);


        mysqli_close($connection);

    }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~statistic

    // debrquated
    function statistique($indis){
        include 'connection.php';


        if($indis == "max"){
            $sql= mysqli_query($connection , "SELECT MAX(price) AS max FROM games");
            $res = mysqli_fetch_array( $sql);

            echo $res['max'];
            
        }
        else if($indis == "min"){
                $sql= mysqli_query($connection , "SELECT MIN(price) AS min FROM games");
                $res = mysqli_fetch_array( $sql);

                echo $res['min'];
                
        }
        

    }



?>