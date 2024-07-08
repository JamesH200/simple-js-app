let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Onix',
            height: 8.8,
            type: ['Rock', 'Ground'],
        },
        {
            name: 'Charmander',
            height: 0.6,
            types: ['Fire'],
        },
        {
            name: 'Charmeleon',
            height: 1.1,
            type: ['Fire'],
        },
        {
            name: 'Charizard',
            height: 1.7,
            type: ['Fire', 'Flying'],
        },
        {
            name: 'Pikachu',
            height: 0.4,
            types: ['Electric'],
        },
        {
            name: 'Raichu',
            height: 0.8,
            types: ['Electric'],
        },
        {
            name: 'Blastoise',
            height: 1.6,
            types: ['Water'],
        },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemons.push(pokemonList)
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');

        let listItem = document.createElement('li');

        let button = document.createElement('button');

        button.innerText = pokemon.name;

        button.classList.add('pokemon-info');

        listItem.appendChild(button);

        pokemonList.appendChild(listItem);

        listItem.addEventListener('click', function (event) {
            pokemonRepository.showDetails(pokemon)
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

// Add each Pokémon to the list with a button
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});