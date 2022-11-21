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













/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::dashboard:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/
let tabelGame = document.getElementById("games-tabel-id");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ show by

let radioAll = document.getElementById('input_radio_all');
let radioShoter = document.getElementById('input_radio_shoter');
let radioSport = document.getElementById('input_radio_sport');
let radioSimulation = document.getElementById('input_radio_simulation');
let radioBattelRoyale = document.getElementById('input_radio_battel');
let radioPuzzel = document.getElementById('input_radio_puzzel');

let yellowPrimary = "#F8C71C";
let darck = "#393E42";


radioAll.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = yellowPrimary;
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})

radioShoter.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = darck;
    radioShoter.style.backgroundColor = yellowPrimary;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioSport.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = darck;
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = yellowPrimary;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioSimulation.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = darck;
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = yellowPrimary;
    radioBattelRoyale.style.backgroundColor = darck;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioBattelRoyale.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = darck;
    radioShoter.style.backgroundColor = darck;
    radioSport.style.backgroundColor = darck;
    radioSimulation.style.backgroundColor = darck;
    radioBattelRoyale.style.backgroundColor = yellowPrimary;
    radioPuzzel.style.backgroundColor = darck;
    
})
radioPuzzel.addEventListener("click" , (params) => {
    radioAll.style.backgroundColor = darck;
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
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::crud:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function loadGameImage(){
    let inputGameImage = document.getElementById('input-load-image-game');
    inputGameImage.click();

}

// temp array
tempGame = [];

function add(event){
    // Find a <table> element with id="myTable":
    

    // Create an empty <tr> element and add it to the 1st position of the table:
    let row = tabelGame.insertRow(1);

    row.innerHTML =
                    `
                        <tr>
                            <th scope="row" class="text-start">?</th>
                            <td onclick="loadGameImage()" class="text-start"><img class="game-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUsNfT7NiYFqkQNII5BalZ72RgFj8yLC4ENRl_X3y46QGhWpYHIiH4OmJ3Y8ii7nLozo&usqp=CAU" alt="game image"></td>
                            <td class="text-start"><input class="change-input" type="text" ></td>
                            <td class="text-start">
                                <select class="change-input w-100" aria-label="Default select example">
                                    <option selected>...</option>
                                    <option value="1">sport</option>
                                    <option value="2">battel royal</option>
                                    <option value="3">puzzel</option>
                                    <option value="4">simulation</option>
                                    <option value="5">shoter</option>
                                </select>
                            </td>
                            <td class="text-start"><input class="change-input" type="number" ></td>
                            <td class="text-start"><input class="change-input" type="number" ></td>
                            <td class="d-none"><input id="input-load-image-game" type="file" accept="image/png, image/jpeg"></td>
                            <td class="text-start"> 
                                <iconify-icon class="pe-4" onclick="saveAdd(event)" icon="material-symbols:add-circle-outline-rounded" style="color: green;"></iconify-icon>
                                <iconify-icon onclick="delet(event)" class="pe-4" icon="mingcute:delete-2-line" style="color: red;"></iconify-icon>
                            </td>
                        </tr>
                    `;

}



function saveAdd(event){

    let elt = event.target.parentElement;
    elt = elt.parentElement;
    for(i=2 ; i<6 ; i++){
        elt = elt.children[i];
        elt = elt.children[0];
        if(i==6) tempGame[i] = elt.files.item(0).name;
        else tempGame[i] = elt.value;

        elt = elt.parentElement;
        elt = elt.parentElement;
    }

    elt.innerHTML = "";

    // tempGame[6] = String(tempGame[6]);


    console.log(tempGame[6]);
    

    // AJAX send data from  this to script.php 
    
    $.post('../scripts/script.php' ,{  
            request:"add", 
            g_name:tempGame[2]  , 
            g_category_id:tempGame[3] , 
            g_price:tempGame[4] , 
            g_quntity:tempGame[5],
            // g_image:tempGame[6] 
            
        }, 

        function(data, status, jqXHR) {// success callback


            
            
            let row = tabelGame.insertRow();
            row.innerHTML = 
                `
                    <th scope="row" class="text-start">`+data.id+`</th>
                    <td class="text-start"><img class="game-image" src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/11/94/637473353b970.png" alt="game image"></td>
                    <td class="text-start">`+data.name+`</td>
                    <td class="text-start">`+data.category_id+`</td>
                    <td class="text-start">`+data.price+`</td>
                    <td class="text-start">`+data.quantity+`</td>
                    <td class="text-start"> 
                    <iconify-icon onclick="edit(event)" class="pe-4" icon="material-symbols:edit-outline-sharp" style="color: #2bb7da;"></iconify-icon>
                        <iconify-icon onclick="delet(event)" class="pe-4" icon="mingcute:delete-2-line" style="color: red;"></iconify-icon>
                        <iconify-icon onclick="back(event)" class="icons-crud-2 pe-4" icon="tabler:arrow-back" style="color: blue;"></iconify-icon>
                        <iconify-icon onclick="saveUpdate(event)" class="icons-crud-2 pe-4" icon="material-symbols:save" style="color: green;"></iconify-icon>
                    </td>
                `;

            

            alert("added : " + status);
            
        },
        'json'


    );

    displayStatistic();


}

function edit(event) {
    let elt = event.target.parentElement;
    elt = elt.parentElement;
    
    let tempVal = elt.children[0].innerText;
    
    tempGame[0] = tempVal;

    for(i=2 ; i<4 ; i++){
        let value = elt.children[i].innerText;
        elt.children[i].innerHTML = "<input class='change-input' type='text' value='" + value + "'>"
        tempGame[i] = value;
    }
    for(i=4 ; i<6 ; i++){
        let value = elt.children[i].innerText;
        elt.children[i].innerHTML = "<input class='change-input' type='number' value='" + value + "'>"
        tempGame[i] = value;
    }


    let value = elt.children[3].innerText;
    elt.children[3].innerHTML =  
        `
            <select class="change-input w-100" aria-label="Default select example">
                <option selected>${tempGame[3]}</option>
                <option value="1">sport</option>
                <option value="3">battel royal</option>
                <option value="3">puzzel</option>
                <option value="3">simulation</option>
            </select>

        `
    ;

      // display icons
    elt = elt.children[6];

    elt.children[0].style.display="none";
    elt.children[1].style.display="none";
    elt.children[2].style.display ="inline-block";
    elt.children[3].style.display ="inline-block";

    
    

}

function saveUpdate(event) {

    let elt = event.target.parentElement;
    elt = elt.parentElement;

    for(i=2 ; i<6 ; i++){
        elt = elt.children[i];
        elt = elt.children[0];
    
        tempGame[i] = elt.value;

        elt = elt.parentElement;
        elt = elt.parentElement;
    }
    

    // AJAX send data from  this to script.php 
    $.post('../scripts/script.php' ,
        {
            request:"update",
            g_id:tempGame[0]  , 
            g_name:tempGame[2]  , 
            g_category_id:tempGame[3] , 
            g_price:tempGame[4] , 
            g_quntity:tempGame[5] 
        },

        function(data, status) {// success callback
            elt = elt.parentElement;
            elt.children[2].innerHTML = data.name;
            elt.children[3].innerHTML = data.category_id;
            elt.children[4].innerHTML = data.price;
            elt.children[5].innerHTML = data.quantity;

            alert("Upddated : " + status);
            
        },
        'json'

        
    );

    // display icons
    elt = elt.children[6];

    elt.children[2].style.display="none";
    elt.children[3].style.display="none";
    elt.children[0].style.display ="inline-block";
    elt.children[1].style.display ="inline-block";
    displayStatistic();

}

function delet(event) {
    let elt = event.target.parentElement;
    elt = elt.parentElement;

    elt = elt.children[0];

    let id = elt.innerText;



     // AJAX send data from  this to script.php
    $.post('../scripts/script.php' ,
        {
            request:"delete",
            g_id:id,
        },
        function(data, status, jqXHR) {// success callback

            if(data == 1){
                elt = elt.parentElement;
                elt.innerHTML = "";
                alert("delete  success" );
            }
            else  alert("delete error ! ");



        },
        'json'
    );

    displayStatistic();

}

function back(event) {
    let elt = event.target.parentElement;
    elt = elt.parentElement;

    for(i=2 ; i<6 ; i++){
        let value = elt.children[i].innerText;
        elt.children[i].innerHTML = tempGame[i];
    }

    // display icons
    elt = elt.children[6];

    elt.children[2].style.display="none";
    elt.children[3].style.display="none";
    elt.children[0].style.display ="inline-block";
    elt.children[1].style.display ="inline-block";
}


/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::display:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/
displayGames(0);
displayStatistic();
function initialazeTabelGames(){
    tabelGame.innerHTML = "";
            let row = tabelGame.insertRow();

            row.innerHTML = `

                <thead>
                    <tr>
                    <th scope="col" class="text-start">id</th>
                    <th scope="col" class="text-start">image</th>
                    <th scope="col" class="text-start">name</th>
                    <th scope="col" class="text-start">category</th>
                    <th scope="col" class="text-start">price</th>
                    <th scope="col" class="text-start">quantity</th>
                    <th scope="col" class="text-start">operation</th>
                    </tr>
                </thead>

            `;
}

function displayGames(filter){

    initialazeTabelGames();

    $.post('../scripts/script.php' ,
    {
        request:"display-games-"+filter,

    },
        function(data, status, jqXHR) {// success callback

            initialazeTabelGames();
            
            let i=0;
            for(game of data){

                row = tabelGame.insertRow();
                row.innerHTML =
                `
                    <th scope="row" class="text-start">`+game.id+`</th>
                    <td class="text-start"><img class="game-image" src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/11/94/637473353b970.png" alt="game image"></td>
                    <td class="text-start">`+game.name+`</td>
                    <td class="text-start">`+game.category_id+`</td>
                    <td class="text-start">`+game.price+`$</td>
                    <td class="text-start">`+game.quantity+`</td>
                    <td class="text-start">
                    <iconify-icon onclick="edit(event)" class="pe-4" icon="material-symbols:edit-outline-sharp" style="color: #2bb7da;"></iconify-icon>
                        <iconify-icon onclick="delet(event)" class="pe-4" icon="mingcute:delete-2-line" style="color: red;"></iconify-icon>
                        <iconify-icon onclick="back(event)" class="icons-crud-2 pe-4" icon="tabler:arrow-back" style="color: blue;"></iconify-icon>
                        <iconify-icon onclick="saveUpdate(event)" class="icons-crud-2 pe-4" icon="material-symbols:save" style="color: green;"></iconify-icon>
                    </td>
                `;

            }
        },
        'json'
    );

}



function displayStatistic(){


    $.post('../scripts/script.php' ,
    {
        request:"statistique",
    },
    function(data, status, jqXHR) {
        let tabelStat = document.getElementById('tabel-statistic');
        tabelStat.rows[0].cells[1].textContent = data.gamesNumber ;
        tabelStat.rows[1].cells[1].textContent = data.maxPrice + "$";
        tabelStat.rows[2].cells[1].textContent = data.minPrice + "$";
        tabelStat.rows[4].cells[1].textContent = data.stock ;
    },
    'json'
);

}

























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





