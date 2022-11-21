<?php
    include 'connection.php';
     //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    if(isset($_POST['sing-in'])) singIn();
    else if(isset($_POST['sing-up'])) singUp();

    if(isset($_POST['request'])){
        if($_POST['request'] == "add") add();
        else if($_POST['request'] == "update") update();
        else if($_POST['request'] == "delete") delete();
        else if($_POST['request'] == "display-games-0") getGames(0);
        else if($_POST['request'] == "display-games-1") getGames(1);
        else if($_POST['request'] == "display-games-2") getGames(2);
        else if($_POST['request'] == "display-games-3") getGames(3);
        else if($_POST['request'] == "display-games-4") getGames(4);
        else if($_POST['request'] == "display-games-5") getGames(5);
        else if($_POST['request'] == "statistique") getStatistique();
    }




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~admin

    

    function singUp(){
        include 'connection.php';
        $firstName = $_POST['first-name'];
        $lastName = $_POST['last-name'];
        $email = $_POST['email'];
        $password=$_POST['password'];
        
        $imageName=$_FILES['image']['name'];

        $specialImageName = date('Y-m-d-h-i-sa').$imageName;
        
        $target = '../asset/admins/'.$specialImageName;
        
        $source = $_FILES['image']['tmp_name'];

        move_uploaded_file($source , $target);



        $singInQuery = "INSERT INTO `admins` (`id`, `firstname`, `lastname`, `email`, `password` , `image`) 
        VALUES (NULL,' $firstName' ,' $lastName' , '$email' , '$password' , '$specialImageName')";
        $result = mysqli_query($connection , $singInQuery);

        header('location: ../pages/dashboard.php');

    }
    function singIn(){
        include 'connection.php';
        $email = $_POST['email'];
        $password = $_POST['password'];

        $singUpQuery = " SELECT * FROM admins WHERE admins.email = '$email' and admins.password = '$password';";
        $result = mysqli_query($connection , $singUpQuery);

        if(mysqli_num_rows($result) == 1){
            $adminData = mysqli_fetch_assoc($result);
            header('location: ../pages/dashboard.php');
            return $adminData;

            echo "ok";
        }
        else{
            
            header('location: ../index.php');
        }

        
        




        

        

    }



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~crud

    function getGames($filter){
        include 'connection.php';



        if($filter == 0)    $sql = "SELECT games.id, games.name, categories.name as category,  games.price ,games.quantity  FROM games INNER JOIN categories on categories.id = games.category_id";

        else $sql = $sql = "SELECT games.id, games.name, categories.name as category,  games.price ,games.quantity  FROM games INNER JOIN categories on categories.id = games.category_id
        WHERE `games`.`category_id` =".$filter;
    


        $result = mysqli_query($connection , $sql);

        $i=0;
        while($row = mysqli_fetch_assoc($result)){
            $data[$i]["id"] = $row['id'];
            $data[$i]["name"] = $row['name'];
            $data[$i]["category_id"] = $row['category'];
            $data[$i]["price"] = $row['price'];
            $data[$i]["quantity"] = $row['quantity'];
            $i++;
        }
        echo json_encode($data);
        mysqli_close($connection);
    }


    function add(){
        include 'connection.php';
        $gName =  $_POST['g_name'];
        $gCategory_id =  $_POST['g_category_id'];
        $gPrice =  $_POST['g_price'];
        $gQuantity =  $_POST['g_quntity'];
        // $gImage=$_FILES['g_image']['name'];
        






        $addGameQuery = "INSERT INTO `games` (`id`, `name`, `category_id`, `price`, `quantity`, `image`) VALUES (NULL, '$gName', '$gCategory_id', '$gPrice', '$gQuantity' , 'empty')";
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

        echo json_encode($data);

        mysqli_close($connection);

    }

    function delete(){
        include 'connection.php';

        $gId = $_POST['g_id'];

        $sql = "DELETE FROM `games` WHERE `games`.`id` = '$gId'";

        $result = mysqli_query($connection , $sql);

        echo json_encode($result);
        mysqli_close($connection);
    }
/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::statistique:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/







    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~statistic

    // debrquated
function getStatistique(){

    include 'connection.php';

    $getGamesQuery = "SELECT * FROM `games`";
    $result = mysqli_query($connection , $getGamesQuery);

    $data["gamesNumber"] = mysqli_num_rows($result);

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



?>