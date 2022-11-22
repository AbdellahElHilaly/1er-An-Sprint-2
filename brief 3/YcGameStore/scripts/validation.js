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
let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regPasword = /[A-Za-z]{3,10}$/;
let regImage =    /\.jpe?g$/;

















function blockOperation(){
    imageValidat = true;
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
    fNvM.style.display = "block";
    if(!regName.test(firstName.value)){
        fNvM.style.color = "red";
        fNvM.innerText = 'invalide';
        firstNameValidat = false;
    
    }
    else{
        fNvM.style.color = "green";
        fNvM.innerText = 'valide';
        firstNameValidat = true;
    }
    blockOperation();
}
function lastNameValidate(){
    lNvM.style.display = "block";
    if(!regName.test(lastName.value)){

        lNvM.style.color = "red";
        lNvM.innerText = 'invalide';
        lastNameValidat = false;
    
    }
    else{
        lNvM.style.color = "green";
        lNvM.innerText = 'valide';
        lastNameValidat = true;
    }
    blockOperation();
}
function emaileValidate(){
    eVm.style.display = "block";
    if(!regEmail.test(emaile.value)){
        eVm.style.color = "red";
        eVm.innerText = 'invalide';
        emaileValidat = false;
    
    }
    else{
        eVm.style.color = "green";
        eVm.innerText = 'valide';
        emaileValidat = true;
    }
    blockOperation();
}
function passwordValidate(){
    pVm.style.display = "block";
    if(!regPasword.test(password.value)){
        pVm.style.color = "red";
        pVm.innerText = 'invalide';
        passwordValidat = false;
    
    }
    else{
        pVm.style.color = "green";
        pVm.innerText = 'valide';
        passwordValidat = true;
    }
    blockOperation();
}
function confPasswordValidate(){
    cPvM.style.display = "block";
    if(confPassword.value != password.value){
        cPvM.style.color = "red";
        cPvM.innerText = 'deferent';
        confPasswordValidat = false;
    
    }
    else{
        cPvM.style.color = "green";
        cPvM.innerText = 'valid';
        confPasswordValidat = true;
    }
    blockOperation();
}

function imageValidate(){
    imageValidat = true;
    // imVm.style.display = "block";
    // console.log("test");
    // if(!regImage.test(image.value)){

    //     imVm.style.color = "red";
    //     imVm.innerText = 'invalide';
    //     firstNameValidat = false;
    
    // }
    // else{
    //     imVm.style.color = "green";
    //     imVm.innerText = 'valide';
    //     firstNameValidat = true;
    // }
}
