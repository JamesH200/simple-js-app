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
    ]

    let pokemonRepository = (function () {
        let pokemonList = []; 
      
        return {
          add: function(pokemon) {
            pokemonList.push(pokemon);
          },
          getAll: function() {
            return pokemonList;
          }
        };
      })();
      
      console.log(pokemonRepository.getAll()); 
      pokemonRepository.add({ name: 'Onix' });
      console.log(pokemonRepository.getAll());