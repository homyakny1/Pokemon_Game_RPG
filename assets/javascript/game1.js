$(document).ready(function () {

    //create vars for pokemons
    var pikachu = ["1", true, 120, 8, 8];
    var bulba = ["1", true, 100, 5, 5];
    var charmander = ["1", true, 150, 20, 20];
    var squirtle = ["1", true, 180, 25, 25];

    showPokemonsHP()

    function showPokemonsHP() {
        $(".pikaHP").html("HP: " + pikachu[2]);
        $(".bulbaHP").html("HP: " + bulba[2]);
        $(".charmanderHP").html("HP: " + charmander[2]);
        $(".squirtleHP").html("HP: " + squirtle[2]);
    }
});