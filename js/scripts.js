let pokemonRepository = (function () {
    let pokemons = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

    function add(pokemon) {
        pokemons.push(pokemon)
    }

    function getAll() {
        return pokemons;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-primary', 'pokemon-info');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    function showModal(pokemon) {
        let modalTitle = document.querySelector('#pokemon-title');
        let modalImage = document.querySelector('#pokemon-image');
        let modalHeight = document.querySelector('#pokemon-height');

        modalTitle.innerText = pokemon.name;
        modalImage.src = pokemon.imageUrl;
        modalHeight.innerText = `Height: ${pokemon.height}`;

        $('#pokemon-modal').modal('show');
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});