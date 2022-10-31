<?php


    function validationNotEmptytask($task){

        if( strlen( filterString($task->title) ) == 0 )                 return false; 
        else if($task->type_id ==-1)                                    return false;
        else if($task->priority_id ==-1)                                return false;
        else if($task->status_id ==-1)                                  return false;
        else if( strlen( filterString($task->date) ) == 0 )             return false;
        else if( strlen( filterString($task->description) ) == 0 )      return false;
        else                                                            return true ;
    }

    function filterString($value){ // ta39im



        $value = trim($value);    
        $value = filter_var($value , FILTER_SANITIZE_STRING);
        $regex = "@(https?://([-\w\.]+[-\w])+(:\d+)?(/([\w/_\.#-]*(\?\S+)?[^\.\s])?).*$)@";
        $value =  preg_replace($regex, '', $value);
        

        return $value;
    }
    




?>