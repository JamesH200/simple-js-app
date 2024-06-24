let pokemonList = [
    {
        id: 1, 
        name: 'Chanmander',
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
for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
    if (pokemon.height > 6) {
        document.write(" - Wow, that\'s Big!");
    }
    document.write("</br>");
};

