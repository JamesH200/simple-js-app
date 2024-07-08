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
        if (typeof pokemon !== 'object' || !pokemon.name || !pokemon.height || !pokemon.types) {
            console.log('Invalid Pokémon format!');
        } else {
            pokemonList.push(pokemon);
        }
    }

    return {
        getAll: getAll,
        add: add,
    };
})();

// Function to create and display the Pokémon list
function displayPokemonList(pokemon) {
    let mainElement = document.getElementById('pokemon-list');
    let pokemonElement = document.createElement('div');

    pokemonElement.classList.add('pokemon-item');
    pokemonElement.textContent = pokemon.name + ' (height: ' + pokemon.height + ')';

    if (pokemon.height > 1.7) {
        pokemonElement.textContent += " - Wow, that's big!";
    }

    pokemonElement.addEventListener('click', function() {
        console.log(pokemon.name + ' (height: ' + pokemon.height + ')');
    });

    mainElement.appendChild(pokemonElement);
}

// Display all Pokémon
pokemonRepository.getAll().forEach(displayPokemonList);