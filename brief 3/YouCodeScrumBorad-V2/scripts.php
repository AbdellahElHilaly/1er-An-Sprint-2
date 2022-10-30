<?php
    //INCLUDE DATABASE FILE
    include 'database.php';
    include 'Task.php';
    include 'validation.php';

    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask()     ;
    if(isset($_POST['update']))      updateTask()   ;
    if(isset($_POST['delete']))      deleteTask()   ;
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Download ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function getAllTasksFromDataBase()
    {
        include 'database.php';
        //CODE HERE
        $tasks = array() ;
        //SQL SELECT

        $getTaskQuery = "SELECT * FROM `tasks`";
        $result = mysqli_query($connection , $getTaskQuery);
        if($result){

            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $tasks[$i] = new Task();
                
                $tasks[$i]->id = $row['id'];
                $tasks[$i]->title = $row['title'];
                $tasks[$i]->type = getTypeFromDataBase( $row['type_id'] );
                $tasks[$i]->priority = getPriorityFromDataBase( $row['priority_id'] );
                $tasks[$i]->status = getStatueFromDataBase( $row['status_id'] );
                $tasks[$i]->date = $row['task_datetime'];
                $tasks[$i]->description = $row['description'];

                $i++;
            }
        }
        // echo "Fetch all tasks";
        return $tasks;
    }



    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ mini-functions ~~~~~~~~~~~~~~~~~~~~~~~~~~

    function getTypeFromDataBase($type_id){
        include 'database.php';
        $getTypeQuery = "SELECT * FROM `types` WHERE `id`='" . $type_id . "'";
        $result = mysqli_query($connection , $getTypeQuery);
        $type = mysqli_fetch_assoc($result);
        return $type['name'];
    }
    function getStatueFromDataBase($priority_id){
        include 'database.php';
        $getTypeQuery = "SELECT * FROM `statuses` WHERE `id`='" . $priority_id . "'";
        $result = mysqli_query($connection , $getTypeQuery);
        $type = mysqli_fetch_assoc($result);
        return $type['name'];
    }

    function getPriorityFromDataBase($status_id){
        include 'database.php';
        $getTypeQuery = "SELECT * FROM `priorities` WHERE `id`='" . $status_id . "'";
        $result = mysqli_query($connection , $getTypeQuery);
        $type = mysqli_fetch_assoc($result);
        return $type['name'];
    }




    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Uploade ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function saveTask()
    {
        include 'database.php';
        
        //CODE HERE
        //SQL INSERT

        if( strlen( trim( getTaskFromModel()->id ) ) > 0 ){
            $_SESSION['success']    = "Error!"                                               ;
            $_SESSION['message']    = "  Wrong operation ?"                                  ;
        }
        
        else if(validationNotEmptytask(getTaskFromModel())){

            $title          = getTaskFromModel()->title       ;
            $type_id        = getTaskFromModel()->type_id     ;
            $priority_id    = getTaskFromModel()->priority_id ;
            $status_id      = getTaskFromModel()->status_id   ;
            $task_datetime  = getTaskFromModel()->date        ;
            $description    = getTaskFromModel()->description ;
    

            $saveTaskQuery = "INSERT INTO `tasks` ( `title`, `type_id` , `priority_id` , `status_id` , `task_datetime` , `description`) 
            values ('$title' ,  '$type_id' ,  '$priority_id' , '$status_id' ,  '$task_datetime' ,  '$description')";
    
            $result = mysqli_query($connection , $saveTaskQuery);
            if($result) {
                $_SESSION['message']    = "Task has been added successfully !"  ;
                $_SESSION['success']    = "Success!"                            ;
            }
            else{
                $_SESSION['message']    = "Task has not been added (data base error) ?" ;
                $_SESSION['success']    = "Error!"                                      ;
            }
                    
        }

        else {
            $_SESSION['success']    = "Error!"                                      ;
            $_SESSION['message']    = "Task has not been added  (empty data) ?"     ;
        }

    

		header('location: index.php');
    }


    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ mini-functions ~~~~~~~~~~~~~~~~~~~~~~~~~~
    function getTaskFromModel(){
        

        $task = new Task();

        $task->id           = $_POST['task-klicked-id']     ;
        $task->title        = $_POST['task-title']          ;
        $task->type_id      = getTypeIDFromModel()          ;
        $task->priority_id  = getPriorityIDFromModel()      ;
        $task->status_id    = getStatueIDFromModel()        ;
        $task->date         = $_POST['task-date']           ;
        $task->description  = $_POST['task-description']    ;
        
        return $task;
        
    }

    function getTypeIDFromModel(){
        if($_POST['task-type']      == "Feature")   return  1;
        else if($_POST['task-type'] == "Bug")       return  2;
        else                                        return -1;
    }
    function getPriorityIDFromModel(){
        if($_POST['task-priority']      == "Low")       return  1;
        else if($_POST['task-priority'] == "Medium")    return  2;
        else if($_POST['task-priority'] == "High")      return  3;
        else if($_POST['task-priority'] == "Critical")  return  4;
        else                                            return -1;
    }

    function getStatueIDFromModel(){
        if($_POST['task-status'] == "To Do")            return  1;
        else if($_POST['task-status'] == "In Progress") return  2;
        else if($_POST['task-status'] == "Done")        return  3;
        else                                            return -1;
    }









    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Edit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function updateTask()
    {
        include 'database.php';
        //CODE HERE
        //SQL UPDATE

        if( strlen( trim( getTaskFromModel()->id ) ) == 0 ){
            $_SESSION['success']    = "Error!"                                              ;
            $_SESSION['message']    = "  Wrong operation ?"                                  ;
        }
        
        else if(validationNotEmptytask(getTaskFromModel())){

            $id             = getTaskFromModel()->id          ;
            $title          = getTaskFromModel()->title       ;
            $type_id        = getTaskFromModel()->type_id     ;
            $priority_id    = getTaskFromModel()->priority_id ;
            $status_id      = getTaskFromModel()->status_id   ;
            $task_datetime  = getTaskFromModel()->date        ;
            $description    = getTaskFromModel()->description ;

            $updateTaskQuery =  "UPDATE `tasks` SET `id`='$id',`title`='$title ',`type_id`='$type_id',`priority_id`='$priority_id'
            ,`status_id`='$status_id',`task_datetime`='$task_datetime', `description`='$description' WHERE `id` = $id";

            $result = mysqli_query($connection , $updateTaskQuery);

            if($result){
                $_SESSION['message']     = " Task has been updated successfully !"  ;
                $_SESSION['success']     = "Success!"                               ;
            } 
            else{
                $_SESSION['message']    = " Task has not been updated ?"            ;
                $_SESSION['success']    = "Error!"                                  ;
            }       
        }
        else {
            $_SESSION['success']    = "Error!"                                       ;
            $_SESSION['message']    = " Task has not been updated  (empty data) ?"   ;
        }

        header('location: index.php');

    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ mini-functions ~~~~~~~~~~~~~~~~~~~~~~~~~~


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Delete ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    function deleteTask()
    {
        include 'database.php';
        //CODE HERE
        //SQL DELETE

        if( strlen( trim( getTaskFromModel()->id ) ) == 0 ){
            $_SESSION['success']    = "Error!"                                              ;
            $_SESSION['message']    = "  Wrong operation ?"                                  ;
        }

        else {

            $id = getTaskFromModel()->id ;
            $deleteTaskQuery = "DELETE FROM  `tasks` WHERE   `id` = $id ";

            $result = mysqli_query($connection , $deleteTaskQuery);

            if($result){

                $_SESSION['message']    = " Task has been deleted successfully !"    ;
                $_SESSION['success']     = "Success!"                               ;
            } 
            else{

                $_SESSION['message']    = " Task has not been deleted ?"             ;
                $_SESSION['success']    = "Error!"                                  ;
            }        
        }
        
        

        
		header('location: index.php');
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ mini-functions ~~~~~~~~~~~~~~~~~~~~~~~~~~




    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ my-functions test ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // parage data from modat to page index.php
    function testSharModalToScript(){  
        // echo $_POST['task-id'] . "<br>";
        echo $_POST['task-title'] . "<br>"      ;
        echo $_POST['task-type'] . "<br>"       ;
        echo $_POST['task-priority'] . "<br>"   ;
        echo $_POST['task-status'] . "<br>"     ;
        echo $_POST['task-date'] . "<br>"       ;
        echo $_POST['task-description'] . "<br>";
    }

    function displayTask($task){
        echo $task->id . "<br>";
        echo $task->title . "<br>"      ;
        echo $task->type_id . "<br>"    ;
        echo $task->priority_id . "<br>";
        echo $task->status_id . "<br>"  ;
        echo $task->date . "<br>"       ;
        echo $task->description . "<br>";

    }

    function displayAllTasks($tasks){
        foreach($tasks as $task){
            // echo $task->id . "<br>";
            echo $task->title . "<br>"      ;
            echo $task->type_id . "<br>"    ;
            echo $task->priority_id . "<br>";
            echo $task->status_id . "<br>"  ;
            echo $task->date . "<br>"       ;
            echo $task->description . "<br>";
            echo "___________________________________<br>";
        }

    }

    
    
    

?>