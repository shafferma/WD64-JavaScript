
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'; 
const catchMeBtn = document.querySelector('.catch-me button');
const pokemonImage = document.querySelector('.catch-me img')
const pokemonName = document.querySelector('#name')
const pokemonNumber = document.querySelector('number')
const pokemonType = document.querySelector('#types')

// console.log(catchMeBtn);
// console.log({pokemonImage})

catchMeBtn.addEventListener('click', getAndDisplayRandomPokemon);

function getAndDisplayRandomPokemon() {
    let pokemonId = getRandomPokemonId(151)
    console.log(pokemonId);

    let url = baseUrl + pokemonId 
    console.log(url)
    
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            // we have access to our pokemon data in here


            // pokemon image url string
            pokemonImage.src = data.sprites.other['official-artwork'].front_default
            
            console.log(data.name)
            
            pokemonName.textContent = data.name
            
            pokemonType.textContent = data.types
        
        })
}

function getRandomPokemonId(maxId) {
    return Math.floor(Math.random() * Math.floor(maxId))
}