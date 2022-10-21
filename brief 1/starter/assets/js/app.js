/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gloabal variables
let tasks_length = 0 , btn_clicked_id;  
let todo_number=0 , in_progres_number=0 , done_number=0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~gloabal function 

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~save task


function saveTask() {
    // Recuperer task attributes a partir les champs input
    let feature_OR_bug ="";

    if(modal_feature.checked) feature_OR_bug = 'Feature';
    else feature_OR_bug = 'Bug';

    // Créez task object
    let temp_taske = {
        'title'         :   model_titel.value,
        'type'          :   feature_OR_bug,
        'priority'      :   modal_Priority.value,
        'status'        :   modal_statu.value,
        'date'          :   modal_date.value,
        'description'   :   modal_Description.value,
        'id'            :   tasks_length,
    };

    // Ajoutez object au Array

    if(model_titel.value !="" && feature_OR_bug!="" && modal_statu.value!="Please select"
    && modal_date.value!="" && modal_Description.value!="" && modal_Priority.value!="Please select"
    ){
        tasks.push(temp_taske);
        tasks_length++;
        // refresh tasks
        close_modal('staticBackdro');
        operation_successfully('Saved!' ,'Your task has been saved.','success' );
        reloadTasks();
    }

    else{
        Swal.fire({
            title: 'ERROR',
            text: "You must enter the data first!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Try agin'
        }).then((result) => {
            if(!result.isConfirmed) {
                close_modal('staticBackdro');
            }
        })
    }


    
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~edit and update 


function editTask() {
    // Initialisez task form
    initTaskForm();
    let index = btn_clicked_id-1;
    btn_save_new_task.style.display = "none";
    btn_save_existing_task.style.display = "block";

    // Affichez updates
    model_titel.value = tasks[index].title;
    modal_Priority.value = tasks[index].priority;
    modal_statu.value = tasks[index].status;
    modal_Description.value = tasks[index].description;
    modal_date.value =  tasks[index].date;
    if(tasks[index].type == "Feature"){
        modal_feature.checked = true;
        modal_bug.checked = false;
    } 

    else{
        modal_bug.checked = true;
        modal_feature.checked = false;
    }

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form

    

}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS
    
    // Créez task object

    // Remplacer ancienne task par nouvelle task
    let feature_OR_bug ="" ,  index = btn_clicked_id-1 ;

    if(modal_feature.checked) feature_OR_bug = 'Feature';
    else feature_OR_bug = 'Bug';

    if(model_titel.value !="" && feature_OR_bug!="" && modal_statu.value!="Please select"
    && modal_date.value!="" && modal_Description.value!="" && modal_Priority.value!="Please select"
    ){
        

        tasks[index].title = model_titel.value ;
        tasks[index].priority =  modal_Priority.value ;
        tasks[index].status = modal_statu.value ;
        tasks[index].description = modal_Description.value ;
        tasks[index].date = modal_date.value ;
        tasks[index].type = feature_OR_bug;
        // refresh tasks
        close_modal('staticBackdro');
        operation_successfully('Saved!' ,'Your task has been saved.','success' );
        reloadTasks();
    }
    else{
        Swal.fire({
            title: 'ERROR',
            text: "You must enter the data first!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Try agin'
        }).then((result) => {
            if(!result.isConfirmed) {
                close_modal('staticBackdro');
            }
        })
    }

    



    
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~delete task
function deleteTask() {

    Swal.fire({
        title: 'Are you sure to delete this task?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if(result.isConfirmed) {
            // Get index of task in the array
            let index = btn_clicked_id-1;

            // Remove task from array by index splice function
            tasks.splice(index , 1);

            // close modal form

            // refresh tasks
            if(to_do_tasks_count.innerHTML == 1) to_do_tasks_count.innerHTML = 0;
            if(in_progress_tasks_count.innerHTML == 1) in_progress_tasks_count.innerHTML = 0;
            if(done_tasks_count.innerHTML == 1) done_tasks_count.innerHTML = 0;

            operation_successfully( 'Deleted!','Your task has been deleted.','success');

            reloadTasks();
        }
    })

    
    
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function initTaskForm() {
    btn_save_new_task.style.display = "block";
    btn_save_existing_task.style.display = "none";
    // Clear task form from data
    staticBackdro.reset();

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    to_do_tasks.innerHTML = "";
    in_progress_tasks.innerHTML ="";
    done_tasks.innerHTML ="";

    //restart cunters 
    todo_number=0  ; in_progres_number=0 ; done_number=0;



    

    // Set Task count
    tasks_length = 0;
    for(let task of tasks){

        task.id = ++tasks_length;

        if(task.status == "To Do") {
            let btn_to_do = `							
                <button onclick="get_button_content_by_click(this.id , ${++todo_number})" class="  d-flex  list-group-item w-100 text-start" id = "${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">
                        <i class="fa-regular fa-circle-question text-success fs-3"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted">#${todo_number}created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title= "title"> ${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;

                to_do_tasks.innerHTML += btn_to_do;
                

        }
        else if(task.status == "In Progress"){
            
            let btn_in_progress = `							
                <button onclick="get_button_content_by_click(this.id , ${++in_progres_number})"   class="d-flex  list-group-item w-100 text-start" id="${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">                       
                        <i class="fa-solid fa-spinner text-success fs-3"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted">#${in_progres_number} created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title="including as many details as possible.">${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;
                in_progress_tasks.innerHTML += btn_in_progress;
        }
        else if(task.status == "Done"){
            
            let btn_done =`						
                <button onclick="get_button_content_by_click(this.id , ${++done_number}  )"  class="d-flex  list-group-item w-100 text-start" id ="${task.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <div class="mt-1">
                        <i class="fa-regular fa-circle-check text-success fs-2"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fs-5 fw-bolder">${task.title}</div>
                        <div class="">
                            <div class="fs-6 fw-light text-muted" >#${done_number} created in ${task.date}</div>
                            <div class="fs-6 fw-normal button_description" title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${task.description}</div>
                        </div>
                        <div class="py-1">
                            <span class="btn btn-primary py-3px px-5px">${task.priority}</span>
                            <span class="btn btn-secondary py-3px px-5px">${task.type}</span>
                        </div>
                    </div>
                </button>`;
                
                done_tasks.innerHTML +=btn_done;


        }

    }
    to_do_tasks_count.innerHTML = todo_number++;
    done_tasks_count.innerHTML = done_number++;
    in_progress_tasks_count.innerHTML = in_progres_number++;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ mini functions
function get_button_content_by_click(btn_id , task_number ){
    btn_clicked_id = btn_id;
    let btn_clicked_indis = btn_id-1;

    let class_icon ;
    if(tasks[btn_clicked_indis].status == "To Do") {
        class_icon = "fa-regular fa-circle-question";
        

    }
    else if(tasks[btn_clicked_indis].status == "In Progress") {
        class_icon = "fa-solid fa-spinner";
    }
    else if(tasks[btn_clicked_indis].status == "Done"){
        class_icon = "fa-regular fa-circle-check";

    }

    let btn_form = `
        <button class="d-flex  list-group-item w-100 text-start mb-3">
            <div class="mt-1">
                <i class="${class_icon} text-success fs-2"></i>
            </div>
            <div class="ms-3">
                <div class="fs-5 fw-bolder">${tasks[btn_clicked_indis].title}</div>
                <div class="">
                    <div class="fs-6 fw-light text-muted">#${task_number} created in ${tasks[btn_clicked_indis].date}</div>
                    <div class="fs-6 fw-normal "title="as they can be helpful in reproducing the steps that caused the problem in the first place.">${tasks[Number(btn_clicked_indis)].description}</div>
                </div>
                <div class="py-1">
                    <span class="btn btn-primary py-3px px-5px">${tasks[btn_clicked_indis].priority}</span>
                    <span class="btn btn-secondary py-3px px-5px">${tasks[btn_clicked_indis].type}</span>
                </div>
            </div>
        </button>
    `;

    btn_form_container.innerHTML = btn_form;


}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  functions Animation
function operation_successfully(txt1 , txt2 , txt3){
    Swal.fire(
        txt1,
        txt2,
        txt3
    )
}

function close_modal(modal_id){
    let myModalEl = document.getElementById(modal_id);
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ appele functions 
reloadTasks();



