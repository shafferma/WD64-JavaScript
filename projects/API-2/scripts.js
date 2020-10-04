const baseUrl = 'http://api.airvisual.com/v2/';
const key = '923d352f-e187-47c0-9271-9f7ae9884c85';
let url = baseUrl + 'nearest_city?key=' + key 

// image element
const weatherIconElement = document.querySelector('#weather');
const cityEl = document.querySelector('#city');
const stateEl = document.querySelector('#state');
const temperatureEl = document.querySelector('#temperature')
// let windSpeedEl = document.querySelector('.wind-speed')

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(
        function(data){
            console.log(data)               // we have access to data 

            let city = data.data.city
            let state = data.data.state

            cityEl.textContent = city
            stateEl.textContent = state


            let weatherCode = data.data.current.weather.ic
            weatherIconElement.className = getWeatherIcon(weatherCode)

            let temperature = data.data.current.weather.tp
            temperatureEl.innerHTML = temperature + '<span>&deg;</span>'
            
            // let wind = data.data.current.weather.ws
            // windSpeedEl.innerHTML = wind + ' wind-speed'
        }
    ) 

    // function convertToF {
    //
    // }
    



function getWeatherIcon(weatherIconIndex) {

    let iconName = ''

    switch(weatherIconIndex) {
        case '01d':
            iconName = 'sun'
            break;

        case '01n':
            iconName = 'moon'
        break;
    
        case '02d':
            iconName = 'cloud-sun'
        break;
    
        case '02n':
            iconName = 'cloud-moon'
        break;
    
        case '03d':
            iconName = 'cloud-sun'
        break;
    
        case '03n':
            iconName = 'cloud-moon'
        break;

        case '04d':
            iconName = 'cloud'
        break;
    
        case '04n':
            iconName = 'cloud'
        break;
    
        case '09d':
            iconName = 'cloud-rain'
        break;

        case '09n':
            iconName = 'cloud rain'
        break;

        case '10d':
            iconName = 'cloud-sun-rain'
        break;

        case '10n':
            iconName = 'cloud-moon-rain'
        break;
    }

    return 'fas fa-' + iconName
}