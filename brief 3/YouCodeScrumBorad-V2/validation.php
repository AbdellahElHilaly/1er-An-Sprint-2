<?php


    function validationNotEmptytask($task){

        if( strlen( trim($task->title) ) == 0 )                 return false; 
        else if($task->type_id ==-1)                            return false;
        else if($task->priority_id ==-1)                        return false;
        else if($task->status_id ==-1)                          return false;
        else if( strlen( trim($task->date) ) == 0 )             return false;
        // else if( !dateValidation($task->date))                  return false;
        else if( strlen( trim($task->description) ) == 0 )      return false;
        else                                                    return true ;
    }

    // function dateValidation($date){
    //     $test_arr  = explode('/', $date);
    //     if (checkdate($test_arr[0], $test_arr[1], $test_arr[2])) return true;
    //     else return false;
    // }


    function sintString($value){ // ta39im
        $str = trim($value);    
        $str = filter_var($str , FILTER_SANITIZE_STRING);
        return $str;
    }
    


?>