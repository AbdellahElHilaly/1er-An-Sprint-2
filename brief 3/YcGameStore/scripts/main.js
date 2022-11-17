/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::index:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/
nav_list_home.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="block";
    document.getElementById('forme_sing_id').style.display="none";
})

nav_list_sing_in.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="none";
    document.getElementById('forme_sing_id').style.display="block";

    forme_sing_label_id.innerHTML="Sing in";

    document.getElementById('forme_sing_name_id').style.display="flex";
    document.getElementById('forme_sing_conf_password_id').style.display="flex";

    document.getElementById('botton_container_submet_sing_in_id').style.display="block";
    document.getElementById('botton_container_submet_sing_up_id').style.display="none";
})


nav_list_sing_up.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="none";
    document.getElementById('forme_sing_id').style.display="block";

    forme_sing_label_id.innerHTML="Sing up";

    document.getElementById('forme_sing_name_id').style.display="none";
    document.getElementById('forme_sing_conf_password_id').style.display="none";

    document.getElementById('botton_container_submet_sing_in_id').style.display="none";
    document.getElementById('botton_container_submet_sing_up_id').style.display="block";
})









/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::dashboard:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ show by


let radioShoter = document.getElementById('input_radio_shoter');
let radioSport = document.getElementById('input_radio_sport');
let radioSimulation = document.getElementById('input_radio_simulation');
let radioBattelRoyale = document.getElementById('input_radio_battel');
let radioPuzzel = document.getElementById('input_radio_puzzel');

let yellowPrimary = "#F8C71C";
let darck = "#393E42";

radioShoter.addEventListener("click" , (params) => {
    radioShoter.style.backgroundColor = yellowPrimary;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioSport.addEventListener("click" , (params) => {
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = yellowPrimary;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioSimulation.addEventListener("click" , (params) => {
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = yellowPrimary;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioBattelRoyale.addEventListener("click" , (params) => {
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = yellowPrimary;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioPuzzel.addEventListener("click" , (params) => {
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = yellowPrimary;
    
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ seachr by

let checkName = document.getElementById('check-name');
let checkPrice = document.getElementById('check-price');
let checkQuantity = document.getElementById('check-quantity');
let checkCategory = document.getElementById('check-category');
let checkId = document.getElementById('check-id');

let inputSearch = document.getElementById('input-search');

let buttonOkSearch = document.getElementById('btn-ok-search');

buttonOkSearch.addEventListener("click" , (params) => {
    if(checkName.checked)  inputSearch.placeholder = "name";
    else if(checkPrice.checked) inputSearch.placeholder = "price";
    else if(checkQuantity.checked) inputSearch.placeholder = "quantity";
    else if(checkCategory.checked) inputSearch.placeholder = "quategory";
    else if(checkId.checked) inputSearch.placeholder = "id";
    closeModal('exampleModal');
})




















/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::general:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function closeModal(modal_id){
    let myModalEl = document.getElementById(modal_id);
    let modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}





