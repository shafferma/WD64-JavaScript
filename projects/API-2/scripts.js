const baseUrl = 'http://api.airvisual.com/v2/';
const key = '923d352f-e187-47c0-9271-9f7ae9884c85';
let url;
// let weatherBtn = document.querySelector('.btn')
const weatherImage = document.querySelector('p-4 img');

url = baseUrl + 'nearest_city?key=' + key 

// weatherBtn.addEventListener('click', forcastDisplay);

// function forcastDisplay() {
//     let todaysForcast = forcastDisplay(9)
//     console.log(forcastDisplay)

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(
        function(data){
        console.log('location', data)               // we have access to data 

           // display location
    let weatherLocation = document.querySelector('.coordinates')
    weatherLocation.textContent = data.location
        console.log(weatherLocation);

        }
    ) 

    // display different weather icon
        // weatherImage.src = data.current.weather.ic
    

    // display wind speed


// }