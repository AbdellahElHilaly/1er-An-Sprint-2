<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YcgameStore</title>
    <link rel="stylesheet" href="styles/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    
</head>

<body class="body">

    <!-- nav bare -->
    <nav>
        <img class="logo" src="asset/logo.png" alt="logo">
        <ul class="nav-list">
            <li class="hader-iteme"  tabindex="0" id="nav_list_home">Home</li>
            <li class="hader-iteme"  tabindex="0" id="nav_list_sing_in">Sing in</li>
            <li class="hader-iteme"  tabindex="0" id="nav_list_sing_up">Sing up</li>
        </ul>
    </nav>

    <section>
        <div class="containerr">
            <div class="reight-section-container">
                <!-- texts home -->
                <div class="text-home-container" id="splash_home_id">
                    <p class="text-home">You Code Game</p>
                    <p class="text-home">store</p>
                    <p class="min-description">be the bettel hero and achive all your dreams</p>
                </div>

                <!----------------------------------------- sing up ----------------------------------------->
                <div class="form-container" id="forme_sing_id">
                    
                    <form method="post" action="scripts/script.php">
                        <div class="form-label">
                            <p class="text-inconsolata text-center fs-2" id="forme_sing_label_id">Sing up</p>
                        </div>
                        <!-- name -->
                        <div class="align-items-center mb-4" id="forme_sing_first_name_id" >
                            <div class="me-3">
                                <iconify-icon icon="mdi:user-circle" class="fs-1"></iconify-icon>
                            </div>
                            <input name="first-name" type="text" id="form1Example13" placeholder="first name" class="inputs form-control form-control-lg border border-dark rounded-4" />
                            
                        </div>

                        <div class="align-items-center mb-4" id="forme_sing_last_name_id" >
                            <div class="me-3">
                                <iconify-icon icon="mdi:user-circle" class="fs-1"></iconify-icon>
                            </div>
                            <input name="last-name" type="text" id="form1Example13" placeholder="last name" class="inputs form-control form-control-lg border border-dark rounded-4" />
                            
                        </div>
                        <!-- emaim -->
                        <div class="name-input d-flex align-items-center mb-4">
                            <div class="me-3">
                                <iconify-icon icon="ic:round-email" class="fs-1"></iconify-icon>
                            </div>
                            <input name="email" type="email" id="form1Example13" placeholder="your email"  class="inputs form-control form-control-lg border border-dark rounded-4"/>
                        </div>
                        <!-- password -->
                        <div class="d-flex align-items-center mb-4">
                            <div class="me-3">
                                <iconify-icon icon="mdi:password" class="fs-1"></iconify-icon>
                            </div>
                            <input name="password" type="password" id="form1Example13" placeholder="your password" class="inputs form-control form-control-lg border border-dark rounded-4" />
                            
                        </div>
                        <!-- password confirm -->
                        <div class="align-items-center mb-4" id="forme_sing_conf_password_id">
                            <div class="pe-3">
                                <iconify-icon icon="mdi:password-check" class="fs-1"></iconify-icon>
                            </div>
                            <input name="conf-password" type="password" id="form1Example13" placeholder="confirm password" class="inputs form-control form-control-lg border border-dark rounded-4" />
                            
                        </div>

                        <!-- Submit button -->
                        <div class="button-container text-center" id="botton_container_submet_sing_in_id">
                            <button name="sing-in" type="submit" class="button-submit"><span class="text-inconsolata" >Submit</span></button>
                        </div>

                        <div  class="button-container  text-center" id="botton_container_submet_sing_up_id">
                            <button name="sing-up"  type="submit" class="button-submit "><span class="text-inconsolata" >Submit</span></button>
                        </div>
                
                        </form>
                    </div>

                
            </div>
            
            <div class="flayer-container">
                <img src="asset/flayer.png" class="flayer" alt="Phone image">
            </div>
            
            
        </div>
        
    </section>




    <!-- ajax jquery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- local  -->
    <script src="scripts/main.js"></script>
    <!-- JavaScript iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.1/iconify-icon.min.js"></script>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

</body>
</html>