/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::index:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/
nav_list_home.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="block";
    document.getElementById('forme_sing_id').style.display="none";
})


nav_list_sing_up.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="none";
    document.getElementById('forme_sing_id').style.display="flex";

    forme_sing_label_id.innerHTML="Sing up";

    document.getElementById('forme_sing_first_name_id').style.display="flex";
    document.getElementById('forme_sing_last_name_id').style.display="flex";
    document.getElementById('forme_sing_conf_password_id').style.display="flex";

    document.getElementById('botton_container_submet_sing_in_id').style.display="none";
    document.getElementById('botton_container_submet_sing_up_id').style.display="flex";
    document.getElementById('forme_sing_conf_password_id').style.display="flex";
    document.getElementById('forme_sing_load_image_id').style.display="flex";

})




nav_list_sing_in.addEventListener("click" , (params) => {
    document.getElementById('splash_home_id').style.display="none";
    document.getElementById('forme_sing_id').style.display="block";

    forme_sing_label_id.innerHTML="Sing in";

    document.getElementById('forme_sing_first_name_id').style.display="none";
    document.getElementById('forme_sing_last_name_id').style.display="none";
    document.getElementById('forme_sing_conf_password_id').style.display="none";

    document.getElementById('botton_container_submet_sing_in_id').style.display="flex";
    document.getElementById('botton_container_submet_sing_up_id').style.display="none";
    document.getElementById('forme_sing_conf_password_id').style.display="none";
    document.getElementById('forme_sing_load_image_id').style.display="none";

})












