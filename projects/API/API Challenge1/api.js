
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'; // 'string'
const catchMeBtn = document.querySelector('.catch-me button');
const pokemonImage = document.querySelector('.catch-me img')
const pokemonName = document.querySelector('#name')
const pokemonNumber = document.querySelector('#number')
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
            console.log('pokemon', data)

            // pokemon image url string
            pokemonImage.src = data.sprites.other['official-artwork'].front_default
            
            pokemonNumber.textContent = data.id

            console.log(data.name)
            
            pokemonName.textContent = data.name
        
            for (index in data.types) {
                console.log(index)
                
                let typeObject = data.types[index]
                console.log(typeObject)
                console.log(typeObject.type)
                console.log(typeObject.type.name)
                //console.log(type.name)

                let span = document.createElement('span'); 
                span.textContent = typeObject.type.name;   
                pokemonType.appendChild(span);
              

            }
            
        
        
        })
}
//so we don't get decimals - whole number
function getRandomPokemonId(maxId) {
    return Math.floor(Math.random() * Math.floor(maxId))
}