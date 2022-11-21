<?php include '../pages/head.php' ?>
<body class="body">


    <header class="header">
        <a href="../index.php">
            <img class="logo" src="../asset/general/logo.png" alt="logo">
        </a>
        
        <div class="d-flex m-0">
            <span class="hader-iteme" tabindex="0">Shearch</span>
            <input type="text" class="hader-iteme shearch inputs form-control   border border-dark rounded-2 " id="input-search" placeholder="game name">
            <iconify-icon class="hader-iteme" icon="ooui:expand"type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"></iconify-icon>

        </div>

        <span onclick="add(event)" class="hader-iteme" tabindex="0">Add Game</span>

        <nav>
            <ul class="nav-list align-items-center m-0">
                <li class="hader-iteme"  tabindex="0" id="nav_list_home"><a class="a-click" href="../index.php">Home</a></li>
                <li class="hader-iteme"  tabindex="0" id="nav_list_sing_in">
                    <img class="rounded-circle shadow-4-strong " height="35rem" with = "35rem"  alt="avatar2" src= "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3c256e58872685.5a0c7b8939f42.png" />

                    
                </li>
                <li class="hader-iteme "  tabindex="0" id="nav_list_sing_up"><a class="a-click" href="../index.php">Sing out</a></li>
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
                    <span onclick="displayGames(0)" class="input-radio all-categories" id="input_radio_all"></span>
                    <label class=" ms-2" for="flexRadioDefault1">all</label>
                </div>

                <div class="d-flex  align-items-center">
                    <span onclick="displayGames(1)" class="input-radio" id="input_radio_shoter"></span>
                    <label class=" ms-2" for="flexRadioDefault1">shoter</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span onclick="displayGames(2)" class="input-radio" id="input_radio_battel"></span>
                    <label  class=" ms-2" for="flexRadioDefault1">battel royal</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span onclick="displayGames(3)" class="input-radio" id="input_radio_puzzel"></span>
                    <label  class=" ms-2" for="flexRadioDefault1">puzzel</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span  onclick="displayGames(4)"  class="input-radio" id="input_radio_sport"></span>
                    <label class=" ms-2" for="flexRadioDefault1">sport</label>
                </div>
                <div class="d-flex  align-items-center">
                    <span onclick="displayGames(5)" class="input-radio" id="input_radio_simulation"></span>
                    <label  class=" ms-2" for="flexRadioDefault1">simulation</label>
                </div>
            </div>


            <label  class="fw-bolder mt-3">Statistic</label>
            <div class="container ">
                <table class="table" id="tabel-statistic">
                    <tbody >
                        <tr>
                            <td>game number</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>max price</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>min price</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>categories number</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>stock</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </aside>

        <article  >
            <div class="container text-center my-3" >


                <table class="table table-warning" id="games-tabel-id"  >
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

                    <!-- hear display games  -->


                    <tbody id="tabel-games-body">
                    </tbody>
                </table>



            </div>

        </article>

    </main>








    <!-- ajax jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../scripts/main.js"></script>
    <!-- JavaScript iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

</body>
</html>