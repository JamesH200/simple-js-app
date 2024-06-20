// Wrap pokemonList array in IIFE
let pokemonRepository = (function () {
    // pokemonList array
    let pokemonList = [
        { name: "Charmeleon", type: ["Fire"], height: 1.1 },
        { name: "Charizard", type: ["Fire", "Flying"], height: 1.7 },
        { name: "Onix", type: ["Rock", "Ground"], height: 8.8 },
        { name: "Bulbasaur", type: ["Grass", "Poison"], height: 0.7 }
    ];

    // Function to return all items
    function getAll() {
        return pokemonList;
    }

    // Function to add a single item
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



