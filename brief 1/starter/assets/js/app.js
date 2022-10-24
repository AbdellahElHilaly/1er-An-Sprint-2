/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gloabal variables
let   buttonClickedId;  
let todoNumber=0 , inProgresNumber=0 , doneNumber=0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gloabal function 

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~save task


function saveTask() {
    let featureOrBug ="";

    if(modalFeatureInputID.checked) featureOrBug = 'Feature';
    else featureOrBug = 'Bug';

    

    

    if(modelTitelInputID.value !="" && featureOrBug!="" && modal_statu.value!="Please select"
    && modal_date.value!="" && modal_Description.value!="" && modelPriorityInputID.value!="Please select"
    ){
        // Créez task object and  Ajoutez object au Array
        let temp_taske = {
            'title'         :   modelTitelInputID.value,
            'type'          :   featureOrBug,
            'priority'      :   modelPriorityInputID.value,
            'status'        :   modal_statu.value,
            'date'          :   modal_date.value,
            'description'   :   modal_Description.value,
            'id'            :   tasks_length,
        };

        tasks.push(temp_taske);
        tasks_length++;
        // refresh tasks
        close_modal('staticBackdro');
        swal("Saved!" ,"Your task has been saved.","success" );
        reloadTasks();
    }

    else{
        swal("Error", "You must enter the data first!", "warning");
    }


    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~edit and update 


function editTask() {
    // Initialisez task form
    initTaskForm();
    let index = buttonClickedId-1;
    btn_save_new_task.style.display = "none";
    btn_save_existing_task.style.display = "block";

    // Affichez updates
    modelTitelInputID.value = tasks[index].title;
    modelPriorityInputID.value = tasks[index].priority;
    modal_statu.value = tasks[index].status;
    modal_Description.value = tasks[index].description;
    modal_date.value =  tasks[index].date;
    if(tasks[index].type == "Feature"){
        modalFeatureInputID.checked = true;
        modalBugInputID.checked = false;
    } 

    else{
        modalBugInputID.checked = true;
        modalFeatureInputID.checked = false;
    }
    

}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS
    
    // Créez task object

    // Remplacer ancienne task par nouvelle task
    let feature_OR_bug ="" ,  index = buttonClickedId-1 ;

    if(modalFeatureInputID.checked) feature_OR_bug = 'Feature';
    else feature_OR_bug = 'Bug';

    if(modelTitelInputID.value !="" && feature_OR_bug!="" && modal_statu.value!="Please select"
    && modal_date.value!="" && modal_Description.value!="" && modelPriorityInputID.value!="Please select"
    ){
        

        tasks[index].title = modelTitelInputID.value ;
        tasks[index].priority =  modelPriorityInputID.value ;
        tasks[index].status = modal_statu.value ;
        tasks[index].description = modal_Description.value ;
        tasks[index].date = modal_date.value ;
        tasks[index].type = feature_OR_bug;
        // refresh tasks
        close_modal('staticBackdro');
        swal("Saved!" ,"Your task has been saved.","success" );
        reloadTasks();
    }
    else{
        swal("Error", "You must enter the data first!", "warning");
    }

    



    
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~delete task
function deleteTask() {
    


    swal({
        title: "Are you sure to delete this task?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {

             // Get index of task in the array
            let index = buttonClickedId-1;

             // Remove task from array by index splice function
            tasks.splice(index , 1);

             // close modal form

             // refresh tasks
            if(todoTasksCounteur.innerHTML == 1) todoTasksCounteur.innerHTML = 0;
            if(inprogressTasksCountainer.innerHTML == 1) inprogressTasksCountainer.innerHTML = 0;
            if(done_tasks_count.innerHTML == 1) done_tasks_count.innerHTML = 0;


            reloadTasks();

            swal("Your task has been deleted.", {
                icon: "success",
            });

        } else {
        swal("Your imaginary file is safe!");
        }
});





}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ initialaz & afichage & reload

function initTaskForm() {
    btn_save_new_task.style.display = "block";
    btn_save_existing_task.style.display = "none";
    // Clear task form from data
    staticBackdro.reset();

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    todoTasksCountainer.innerHTML = "";
    inprogressTasksCountainer.innerHTML ="";
    DoneTaskContainer.innerHTML ="";

    //restart cunters 
    todoNumber=0  ; inProgresNumber=0 ; doneNumber=0;



    

    // Set Task count
    tasks_length = 0;
    for(let task of tasks){

        task.id = ++tasks_length;

        if(task.status == "To Do") {
            let btn_to_do = `							
                <button onclick="get_button_content_by_click(this.id , ${++todoNumber})" class="  d-flex  list-group-item w-100 text-start" id = "${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">
                        <i class="fa-regular fa-circle-question text-success fs-3"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted">#${todoNumber}created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title= "title"> ${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;

                todoTasksCountainer.innerHTML += btn_to_do;
                

        }
        else if(task.status == "In Progress"){
            
            let btn_in_progress = `							
                <button onclick="get_button_content_by_click(this.id , ${++inProgresNumber})"   class="d-flex  list-group-item w-100 text-start" id="${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">                       
                        <i class="fa-solid fa-spinner text-success fs-3"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted">#${inProgresNumber} created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title="including as many details as possible.">${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;
                inprogressTasksCountainer.innerHTML += btn_in_progress;
        }
        else if(task.status == "Done"){
            
            let btn_done =`						
                <button onclick="get_button_content_by_click(this.id , ${++doneNumber}  )"  class="d-flex  list-group-item w-100 text-start" id ="${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">
                        <i class="fa-regular fa-circle-check text-success fs-2"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted" >#${doneNumber} created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;
                
                DoneTaskContainer.innerHTML +=btn_done;


        }

    }
    todoTasksCounteur.innerHTML = todoNumber++;
    inProgressTasksCounteur.innerHTML = inProgresNumber++;
    done_tasks_count.innerHTML = doneNumber++;
    
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ mini functions
function get_button_content_by_click(btnId , taskNumber ){
    buttonClickedId = btnId;
    let btnClickedIndis = btnId-1;

    let iconeClassBootstrap ;
    if(tasks[btnClickedIndis].status == "To Do") {
        iconeClassBootstrap = "fa-regular fa-circle-question";
        

    }
    else if(tasks[btnClickedIndis].status == "In Progress") {
        iconeClassBootstrap = "fa-solid fa-spinner";
    }
    else if(tasks[btnClickedIndis].status == "Done"){
        iconeClassBootstrap = "fa-regular fa-circle-check";

    }

    let btnForm = `
        <button class="d-flex  list-group-item w-100 text-start mb-3">
            <div class="mt-1">
                <i class="${iconeClassBootstrap} text-success fs-2"></i>
            </div>
            <div class="ms-3">
                <div class="fs-5 fw-bolder">${tasks[btnClickedIndis].title}</div>
                <div class="">
                    <div class="fs-6 fw-light text-muted">#${taskNumber} created in ${tasks[btnClickedIndis].date}</div>
                    <div class="fs-6 fw-normal "title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${tasks[Number(btnClickedIndis)].description}</div>
                </div>
                <div class="py-1">
                    <span class="btn btn-primary py-3px px-5px">${tasks[btnClickedIndis].priority}</span>
                    <span class="btn btn-secondary py-3px px-5px">${tasks[btnClickedIndis].type}</span>
                </div>
            </div>
        </button>
    `;

    btnTaskFormContainer.innerHTML = btnForm;


}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  functions Animation


function close_modal(modal_id){
    let myModalEl = document.getElementById(modal_id);
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ appele functions 
reloadTasks();



