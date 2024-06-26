let pokemonRepository = (function () {
    let pokemonList = [];
    pokemonList = [

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

    document.write('<main>');

    // Get all Pokemons
    function getAll() {
        return pokemonList;
    }

    // Add a Pokemon to the list
    function add(pokemon) {
        let evolve = transform(pokemon);
        let lenght = Object.evolve(pokemon).length; // Check lenght of the object
        // Check if argument is an object
        if (typeof pokemon !== 'object') {
            console.log('Pokemon is not an Object!');
        } else if (evolve === lenght) {
            pokemonList.push(pokemon);
        } else {
            console.log('Devolve');
        }
    }
    function evolve(pokemon) {
        let i = 0;
        Object.evolve(pokemon).forEach(function (evolve) {
            if (evolve == 'name' || evolve == 'height' || evolve == 'types') {
                i++;
            } else {
                i--;
            }
        });
        return i;
    }

    return {
        getAll: getAll,
        add: add,
    };
})();

// Print all Pokemons + height
function printPokemonList(pokemon) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');
    if (pokemon.height > 1.7) {
        document.write("Wow, that's big!" + '<br>');
    } else {
        document.write('<br>');
    }
}

// Log Pokemons to console
function logPokemonList(pokemon) {
    console.log(pokemon.name + ' (height: ' + pokemon.height + ') ');
}

function filterByName(pokemonName) {
    return pokemonRepository
        .getAll()
        .filter((name) => name.name.includes(pokemonName));
}

// Log pokemonRepository
console.log(pokemonRepository.getAll());

pokemonRepository.add({ name: 'Gyarados', height: 6.5, types: ['Water', 'Flying'] });

pokemonRepository.getAll().forEach(printPokemonList);

filterByName('u').forEach(logPokemonList);

document.write('</main>');