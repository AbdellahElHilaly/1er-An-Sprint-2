/*
    parsley lien css
    j query lient 

    defer : afichage html and js in same time 


    check validation au mem temep de ecreture 
    onkeyup="functionvalidation()" (php)

    regular expretion

    test()

*/
let submitSingIn = document.getElementById('submit-sing-in-id');
let submitSingUp = document.getElementById('submit-sing-up-id');
submitSingIn.disabled = true;
submitSingUp.disabled = true;


let firstName , lastName , emaile , password , confPassword , image;
firstName = document.getElementById('first-name-id');
lastName = document.getElementById('last-name-id');
emaile = document.getElementById('email-id');
password = document.getElementById('pasword-id');
confPassword = document.getElementById('conf-pasword-id');
image = document.getElementById('image-id');

let firstNameValidat=false;
let lastNameValidat=false;
let emaileValidat=false;
let passwordValidat=false;
let confPasswordValidat=false;
let imageValidat=false;



let fNvM = document.getElementById('f-n-validate-id');
let lNvM = document.getElementById('l-n-validate-id');
let eVm = document.getElementById('e-validate-id');
let pVm = document.getElementById('p-validate-id');
let cPvM = document.getElementById('c-p-validate-id');
let imVm = document.getElementById('i-validate-id');


let regName = /[A-Za-z]{3,10}$/;
















function blockOperation(){
    if(
        firstNameValidat && lastNameValidat &&
        emaileValidat && passwordValidat &&
        confPasswordValidat && imageValidat 
    ){
        submitSingUp.disabled = false;
    }

    else{
        submitSingUp.disabled = true;
    }
}



function firstNameValidate(){
    if(!regName.test(firstName.value)){

        fNvM.style.color = "#ff0000";
        fNvM.innerText = 'invalide';
        firstNameValidat = false;
    
    }
    else{
        fNvM.class ="text-success";
        fNvM.innerText = 'valide';
        firstNameValidat = true;
    }
}
function lastNameValidate(){

}
function emaileValidate(){

}
function passwordValidate(){

}
function confPasswordValidate(){

}

function imageValidate(){

}
