let pokemonRepository = (function () {

    let pokemonList = [
        {
            id: 1,
            name: 'Charmander',
            type: ['fire'],
            height: 1.1
        },
        {
            id: 2,
            name: 'Charizard',
            type: ['fire', 'flying'],
            height: 1.7
        },
        {
            id: 3,
            name: 'Onix',
            type: ['rock', 'ground'],
            height: 8.8
        }
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
            pokemonList.push(pokemon);

    
        }

    return {
        getAll: getAll,
        add: add
    }

})()
console.log(pokemonRepository.getAll())

