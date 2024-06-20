// Wrap pokemonList array in IIFE
let pokemonRepository = (function () {
    // pokemonList array
    let pokemonList = [
        { name: "Charmeleon", type: ["Fire"], height: 1.1 },
        { name: "Charizard", type: ["Fire", "Flying"], height: 1.7 },
        { name: "Onix", type: ["Rock", "Ground"], height: 8.8 },
        { name: "Bulbasaur", type: ["Grass", "Poison"], height: 0.7 }
    ];

    // return all items to functions
    function getAll() {
        return pokemonList;
    }

    // add a single item to functions 
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // Return an object with the public functions
    return {
        getAll: getAll,
        add: add
    };
})();

// Update forEach loop to use pokemonRepository.getAll()
pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon.name);
});



