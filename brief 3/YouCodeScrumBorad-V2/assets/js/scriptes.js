function loadPopUP(id){
    
    button_show_modal.click();
    
}

function formReset(){
    hideButtons("add");
    form_task.reset();               
}

function hideButtons(addOrEdit){
    if(addOrEdit == "add"){
        document.getElementById("task-save-btn").style.display = "block";
        document.getElementById("task-update-btn").style.display = "none";
        document.getElementById("task-delete-btn").style.display = "none";
    }
    else{
        document.getElementById("task-save-btn").style.display = "none";
        document.getElementById("task-update-btn").style.display = "block";
        document.getElementById("task-delete-btn").style.display = "block";
    }
}


function remplirePopUP(id){
    
    task_klicked_id.value   =  id                                                               ;
    task_title.value        =  document.getElementById(id+'_title').getAttribute("value")       ;
    task_date.value         =  document.getElementById(id+'_date').getAttribute("value")        ;
    task_priority.value     =  document.getElementById(id+'_priority').getAttribute("value")    ;
    task_status.value       =   document.getElementById(id+'_status').getAttribute("value")     ;
    task_description.value  =  document.getElementById(id+'_description').getAttribute("value") ;


    if( document.getElementById(id+'_type').getAttribute("value") == "Feature"){
        task_type_feature.checked = true ;
        task_type_bug.checked = false;
    } 
    else {
        task_type_feature.checked = false ;
        task_type_bug.checked = true;
    } 

}



function redyForEdit(id){
    hideButtons("update");
    loadPopUP(id);
    remplirePopUP(id);
    
}

