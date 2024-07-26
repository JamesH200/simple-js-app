document.addEventListener('DOMContentLoaded', function() {
    const pokemonContainer = document.getElementById('pokemonContainer');
    const searchField = document.getElementById('searchField');
    const searchButton = document.getElementById('searchButton');
    const clearSearchButton = document.getElementById('clearSearchButton');
    const noPokemonsFound = document.getElementById('noPokemonsFound');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const query = searchField.value.toLowerCase().trim();
        if (query) {
            searchPokemon(query);
        }
    });

    clearSearchButton.addEventListener('click', function(event) {
        event.preventDefault();
        searchField.value = '';
        pokemonContainer.innerHTML = '';
        noPokemonsFound.innerHTML = '';
    });

    function searchPokemon(query) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then(response => response.json())
            .then(data => {
                displayPokemon(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                noPokemonsFound.innerHTML = `<p>No Pokémon found</p>`;
            });
    }

    function displayPokemon(pokemon) {
        pokemonContainer.innerHTML = `
            <div class="col">
                <h5>${pokemon.name}</h5>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="img-fluid">
                <p>Height: ${pokemon.height}</p>
            </div>
        `;
    }
});