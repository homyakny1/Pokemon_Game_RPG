$(document).ready(function () {
    
    //////////////create vars for pokemons and other stuff
        var pikachu = ["1", true, 120, 8, 8];
        var bulba = ["1", true, 100, 5, 5];
        var charmander = ["1", true, 150, 20, 20];
        var squirtle = ["1", true, 180, 25, 25];
        var choosenPokemon = false;
        var opponent = false;
        var pokemonSong = document.getElementById("pokemon-song");
    
        pokemonSong.play()
        showPokemonsHP()
        choosePokemon()
        chooseEnemy()
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        function choosePokemon() {
            $("#pikachu-main").on("click", function () {
                if (pikachu[0] === "1" && choosenPokemon === false) {
                    choosenPokemon = true;
                    pikachu[0] = "2";
                    $("#pikachu-left").css("display","inline-block")
                    $("#pikachu-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                } 
                else{
                }
            });
            $("#bulba-main").on("click", function () {
                if (bulba[0] === "1" && choosenPokemon === false ) {
                    choosenPokemon = true;
                    bulba[0] = "2";
                    $("#bulba-left").css("display","inline-block")
                    $("#bulba-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                } 
                else{
                }
            });
            $("#charmander-main").on("click", function () {
                if (charmander[0] === "1" && choosenPokemon === false ) {
                    choosenPokemon = true;
                    charmander[0] = "2";
                    $("#charmander-left").css("display","inline-block")
                    $("#charmander-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                }  
                else{
                }
            });
            $("#squirtle-main").on("click", function () {
                if (squirtle[0] === "1" && choosenPokemon === false) {
                    choosenPokemon=true;
                    squirtle[0] = "2";
                    $("#squirtle-left").css("display","inline-block")
                    $("#squirtle-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                } 
                else{
                }
            });
        }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
        function chooseEnemy(){
            $("#pikachu-main").on("click", function () {
                if (pikachu[0] === "1" && opponent === false) {
                    opponent = true;
                    pikachu[0] = "3";
                    $("#pikachu-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                    if(choosenPokemon === true && opponent === true){
                        $(".pokemon-row").css("display","none");
                        $("#fight-botton").css("display","block");
                        // if(pikachu[0] === "2"){
                        //     console.log("test")
                        //     $("#pikachu-left").css("display","inline-block")
                        // }
                        if(pikachu[0] === "3"){
                            $("#pikachu-right").css("display","inline-block")
                        }
                    };
                } 
            });
            $("#bulba-main").on("click", function () {
                if (bulba[0] === "1" && opponent === false ) {
                    opponent = true;
                    bulba[0] = "3";
                    $("#bulba-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                    if(choosenPokemon === true && opponent === true){
                        $(".pokemon-row").css("display","none");
                        $("#fight-botton").css("display","block");
                        // if(bulba[0] === "2"){
                        //     console.log("test")
                        //     $("#bulba-left").css("display","inline-block")
                        // }
                        if(bulba[0] === "3"){
                            $("#bulba-right").css("display","inline-block")
                        }
                    };
                } 
            });
            $("#charmander-main").on("click", function () {
                if (charmander[0] === "1" && opponent === false ) {
                    opponent = true;
                    charmander[0] = "3";
                    $("#charmander-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                    if(choosenPokemon === true && opponent === true){
                        $(".pokemon-row").css("display","none");
                        $("#fight-botton").css("display","block");
                        // if(charmander[0] === "2"){
                        //     console.log("test")
                        //     $("#charmander-left").css("display","inline-block")
                        // }
                        if(charmander[0] === "3"){
                            $("#charmander-right").css("display","inline-block")
                        }
                    };
                } 
            });
            $("#squirtle-main").on("click", function () {
                if (squirtle[0] === "1" && opponent === false) {
                    opponent=true;
                    squirtle[0] = "3";
                    $("#squirtle-main").css("display", "none");
                    $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                    if(choosenPokemon === true && opponent === true){
                        $(".pokemon-row").css("display","none");
                        $("#fight-botton").css("display","block");
                        // if(squirtle[0] === "2"){
                        //     console.log("test")
                        //     $("#squirtle-left").css("display","inline-block")
                        // }
                        if(squirtle[0] === "3"){
                            $("#squirtle-right").css("display","inline-block")
                        }
                    };
                } 
            });
        };
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        
        function showPokemonsHP() {
            $(".pikaHP").html("HP: " + pikachu[2]);
            $(".bulbaHP").html("HP: " + bulba[2]);
            $(".charmanderHP").html("HP: " + charmander[2]);
            $(".squirtleHP").html("HP: " + squirtle[2]);
        }
    });