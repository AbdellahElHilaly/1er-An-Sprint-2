<?php include '../pages/head.php' ?>
<body>


    <header class="header">
        <img class="logo" src="../asset/logo.png" alt="logo">
        <div class="d-flex">
            <span class="hader-iteme" tabindex="0">Shearch</span>
            <input type="text" class="hader-iteme shearch inputs form-control   border border-dark rounded-2 ps-2" id="input-search" placeholder="game name">
            <iconify-icon class="hader-iteme" icon="ooui:expand"type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"></iconify-icon>
            
        </div>
        
        <span onclick="add(event)" class="hader-iteme" tabindex="0">Add Game</span>

        <nav>
            <ul class="nav-list">
                <li class="hader-iteme"  tabindex="0" id="nav_list_home"><a class="a-click" href="../index.php">Home</a></li>
                <li class="hader-iteme"  tabindex="0" id="nav_list_sing_in">abdellah</li>
                <li class="hader-iteme"  tabindex="0" id="nav_list_sing_up"><a class="a-click" href="../index.php">Sing out</a></li>
            </ul>
    </nav>
    </header>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Search by</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check-name">
                    <label class="form-check-label" for="flexRadioDefault1">
                        name
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check-category" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        category
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check-price" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        price
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check-quantity" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        quantity
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="check-id" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        id
                    </label>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="btn-ok-search">Ok</button>
            </div>
            </div>
        </div>
    </div>

    

    <main class="d-flex" >
        <aside class="ps-2">
            <label  class="fw-bolder">Categories</label>
            <div class="container ">
                <div class="d-flex  align-items-center">
                    <span class="input-radio all-categories" id="input_radio_all"></span>
                    <label class=" ms-2" for="flexRadioDefault1">all</label>
                </div>

                <div class="d-flex  align-items-center">
                    <span class="input-radio" id="input_radio_shoter"></span>
                    <label class=" ms-2" for="flexRadioDefault1">shoter</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span class="input-radio" id="input_radio_sport"></span>
                    <label class=" ms-2" for="flexRadioDefault1">sport</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span class="input-radio" id="input_radio_battel"></span>
                    <label class=" ms-2" for="flexRadioDefault1">battel royal</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span class="input-radio" id="input_radio_puzzel"></span>
                    <label class=" ms-2" for="flexRadioDefault1">puzzel</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span class="input-radio" id="input_radio_simulation"></span>
                    <label class=" ms-2" for="flexRadioDefault1">simulation</label>
                </div>
            </div>


            <label  class="fw-bolder mt-3">Statistic</label>
            <div class="container ">
                <table class="table">
                    <tbody>
                        
                        <tr>
                            <td>game number</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>max price</td>
                            <td>5$</td>
                        </tr>
                        <tr>
                            <td>min price</td>
                            <td>3$</td>
                        </tr>
                        <tr>
                            <td>categories number</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>number of bye</td>
                            <td>560</td>
                        </tr>
                        <tr>
                            <td>game number</td>
                            <td>56</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            
        </aside>

        <article  >
            <div class="container text-center my-3" >
                <!-- <div class="row mb-3">
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                    <div class="col">
                        <div class="carde">
                            <p class="title text-white  fw-bolder ps-2">game title</p>
                            <img class="" src="https://img.freepik.com/premium-vector/control-flat-design-vector-background-game_53850-3.jpg" alt="game image">
                        </div>
                    </div>
                </div> -->



                <table class="table table-warning"  >
                    <thead>
                        <tr>
                        <th scope="col" class="text-start">id</th>
                        <th scope="col" class="text-start">image</th>
                        <th scope="col" class="text-start">name</th>
                        <th scope="col" class="text-start">category</th>
                        <th scope="col" class="text-start">price</th>
                        <th scope="col" class="text-start">qantity</th>
                        <th scope="col" class="text-start">operation</th>
                        </tr>
                    </thead>
                    <tbody id="tabel-games-body">
                        <tr>
                            <th scope="row" class="text-start">1</th>
                            <td class="text-start"><img class="game-image" src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/11/94/637473353b970.png" alt="game image"></td>
                            <td class="text-start">garena free fire</td>
                            <td class="text-start">battel royale</td>
                            <td class="text-start">free shop</td>
                            <td class="text-start">illimete</td>
                            <td class="text-start"> 
                            <iconify-icon onclick="edit(event)" class="pe-4" icon="material-symbols:edit-outline-sharp" style="color: #2bb7da;"></iconify-icon>
                                <iconify-icon onclick="delet(event)" class="pe-4" icon="mingcute:delete-2-line" style="color: red;"></iconify-icon>
                                <iconify-icon onclick="back(event)" class="icons-crud-2 pe-4" icon="tabler:arrow-back" style="color: blue;"></iconify-icon>
                                <iconify-icon onclick="save(event)" class="icons-crud-2 pe-4" icon="material-symbols:save" style="color: green;"></iconify-icon>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" class="text-start">1</th>
                            <td class="text-start"><img class="game-image" src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/11/94/637473353b970.png" alt="game image"></td>
                            <td class="text-start">garena free fire</td>
                            <td class="text-start">
                                    shoter
                            </td>
                            <td class="text-start">free shop</td>
                            <td class="text-start">illimete</td>
                            <td class="text-start"> 
                                <iconify-icon onclick="edit(event)" class="pe-4" icon="material-symbols:edit-outline-sharp" style="color: #2bb7da;"></iconify-icon>
                                <iconify-icon onclick="delet(event)" class="pe-4" icon="mingcute:delete-2-line" style="color: red;"></iconify-icon>
                                <iconify-icon onclick="back(event)" class="icons-crud-2 pe-4" icon="tabler:arrow-back" style="color: blue;"></iconify-icon>
                                <iconify-icon onclick="save(event)" class="icons-crud-2 pe-4" icon="material-symbols:save" style="color: green;"></iconify-icon>

                            </td>
                        </tr>
                    </tbody>
                    </table>

                

                


                
            </div>
            
        </article>

    </main>

    








    <script src="../scripts/main.js"></script>
    <!-- JavaScript iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

</body>
</html>