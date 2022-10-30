<?php


    function validationNotEmptytask($task){

        if( strlen( trim($task->title) ) == 0 )                 return false; 
        else if($task->type_id ==-1)                            return false;
        else if($task->priority_id ==-1)                        return false;
        else if($task->status_id ==-1)                          return false;
        else if( strlen( trim($task->date) ) == 0 )             return false;
        else if( strlen( trim($task->description) ) == 0 )      return false;
        else                                                    return true ;
    }
    


?>