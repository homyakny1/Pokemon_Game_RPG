$(document).ready(function () {

    //////////////create vars for pokemons and other stuff
    var pikachu = ["1", 120, 8, 8];
    var bulba = ["1", 100, 5, 5];
    var charmander = ["1", 150, 20, 20];
    var squirtle = ["1", 180, 25, 25];
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
                $("#pikachu-left").css("display", "inline-block")
                $("#pikachu-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
            }
        });
        $("#bulba-main").on("click", function () {
            if (bulba[0] === "1" && choosenPokemon === false) {
                choosenPokemon = true;
                bulba[0] = "2";
                $("#bulba-left").css("display", "inline-block")
                $("#bulba-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
            }
        });
        $("#charmander-main").on("click", function () {
            if (charmander[0] === "1" && choosenPokemon === false) {
                choosenPokemon = true;
                charmander[0] = "2";
                $("#charmander-left").css("display", "inline-block")
                $("#charmander-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
            }
        });
        $("#squirtle-main").on("click", function () {
            if (squirtle[0] === "1" && choosenPokemon === false) {
                choosenPokemon = true;
                squirtle[0] = "2";
                $("#squirtle-left").css("display", "inline-block")
                $("#squirtle-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
            }
        });
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function chooseEnemy() {
        $("#pikachu-main").on("click", function () {
            if (pikachu[0] === "1" && opponent === false) {
                opponent = true;
                pikachu[0] = "3";
                $("#pikachu-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                if (choosenPokemon === true && opponent === true) {
                    $(".pokemon-row").css("display", "none");
                    $("#fight-botton").css("display", "block");
                    if (pikachu[0] === "3") {
                        $("#pikachu-right").css("display", "inline-block");
                        $("#pokemonsArena").css("display", "block");
                    }
                };
            }
        });
        $("#bulba-main").on("click", function () {
            if (bulba[0] === "1" && opponent === false) {
                opponent = true;
                bulba[0] = "3";
                $("#bulba-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                if (choosenPokemon === true && opponent === true) {
                    $(".pokemon-row").css("display", "none");
                    $("#fight-botton").css("display", "block");
                    if (bulba[0] === "3") {
                        $("#bulba-right").css("display", "inline-block");
                        $("#pokemonsArena").css("display", "block");
                    }
                };
            }
        });
        $("#charmander-main").on("click", function () {
            if (charmander[0] === "1" && opponent === false) {
                opponent = true;
                charmander[0] = "3";
                $("#charmander-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                if (choosenPokemon === true && opponent === true) {
                    $(".pokemon-row").css("display", "none");
                    $("#fight-botton").css("display", "block");
                    if (charmander[0] === "3") {
                        $("#charmander-right").css("display", "inline-block");
                        $("#pokemonsArena").css("display", "block");
                    }
                };
            }
        });
        $("#squirtle-main").on("click", function () {
            if (squirtle[0] === "1" && opponent === false) {
                opponent = true;
                squirtle[0] = "3";
                $("#squirtle-main").css("display", "none");
                $("#choose_pokemon").attr("src", "assets/media/press_to_fight.png");
                if (choosenPokemon === true && opponent === true) {
                    $(".pokemon-row").css("display", "none");
                    $("#fight-botton").css("display", "block");
                    if (squirtle[0] === "3") {
                        $("#squirtle-right").css("display", "inline-block");
                        $("#pokemonsArena").css("display", "block");
                    }
                };
            }
        });
    };

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    ///......................................................pikachu vs ************************
    $("#fight-botton").on("click", function fightArena(){
        console.log("Clicked");
        console.log("Pika: "+pikachu[0]);
        console.log("Bilba: "+bulba[0]);
        if(pikachu[0] === "2" && bulba[0] === "3"){
            pikachu[1] -= bulba[2];
            bulba[1]-=pikachu[2];
            pikachu[2] += pikachu[3];
            $(".pikaHP").html("HP: " + pikachu[1]);
            $(".bulbaHP").html("HP: " + bulba[1]);
            if(pikachu[1] <= 0){
                console.log("Pikachu Lost");
                $("#pikachu-left").css("display", "none");
            }
            else if(bulba[1] <= 0){
                bulba[0] = 4;
                $("#bulba-right").css("display", "none");
                console.log("Bulba lost")
                $("#pokemonsArena").css("display", "none");
                $(".pokemon-row").css("display", "block");
                opponent = false;
                console.log(opponent);
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                chooseEnemy()
            }       
        }
        if(pikachu[0] === "2" && charmander[0] === "3"){
            pikachu[1] -= charmander[2];
            charmander[1]-=pikachu[2];
            pikachu[2] += pikachu[3];
            $(".pikaHP").html("HP: " + pikachu[1]);
            $(".charmanderHP").html("HP: " + charmander[1]);
            if(pikachu[1] <= 0){
                console.log("Pikachu Lost");
                $("#pikachu-left").css("display", "none");
            }
            else if(charmander[1] <= 0){
                charmander[0] = 4;
                $("#charmander-right").css("display", "none");
                console.log("Bulba lost")
                $("#pokemonsArena").css("display", "none");
                $(".pokemon-row").css("display", "block");
                opponent = false;
                console.log(opponent);
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                chooseEnemy()
            }
        }
        if(pikachu[0] === "2" && squirtle[0] === "3"){
            pikachu[1] -= squirtle[2];
            squirtle[1]-=pikachu[2];
            pikachu[2] += pikachu[3];
            $(".pikaHP").html("HP: " + pikachu[1]);
            $(".squirtleHP").html("HP: " + squirtle[1]);
            if(pikachu[1] <= 0){
                console.log("Pikachu Lost");
                $("#pikachu-left").css("display", "none");
            }
            else if(squirtle[1] <= 0){
                squirtle[0] = 4;
                $("#squirtle-right").css("display", "none");
                console.log("Bulba lost")
                $("#pokemonsArena").css("display", "none");
                $(".pokemon-row").css("display", "block");
                opponent = false;
                console.log(opponent);
                $("#choose_pokemon").attr("src", "assets/media/choose_enemy.png");
                chooseEnemy()
            }
        }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function showPokemonsHP() {
        $(".pikaHP").html("HP: " + pikachu[1]);
        $(".bulbaHP").html("HP: " + bulba[1]);
        $(".charmanderHP").html("HP: " + charmander[1]);
        $(".squirtleHP").html("HP: " + squirtle[1]);
    }
});