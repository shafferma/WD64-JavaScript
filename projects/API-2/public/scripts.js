const baseUrl = 'http://api.airvisual.com/v2/';
const key = '923d352f-e187-47c0-9271-9f7ae9884c85';
let url = baseUrl + 'nearest_city?key=' + key 

// image element
const weatherIconElement = document.querySelector('#weather i');
const cityEl = document.querySelector('#city');
const stateEl = document.querySelector('#state');
const temperatureEl = document.querySelector('#temperature')
const toggleBtn = document.querySelector('.toggle')
toggleBtn.addEventListener('click', toggleTemperature);
// let windSpeedEl = document.querySelector('.wind-speed')

// store temp data here, we do this so multiple functions can reference this variable
let temperature = 0;
let measurement = 'c'

displayTemperature(temperature)

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(
        function(data) {
            console.log(data)               // we have access to data 

            let city = data.data.city
            let state = data.data.state

            cityEl.textContent = city
            stateEl.textContent = state


            let weatherCode = data.data.current.weather.ic
            weatherIconElement.className = getWeatherIcon(weatherCode)

            temperature = data.data.current.weather.tp
            displayTemperature(temperature)

            
            // let wind = data.data.current.weather.ws
            // windSpeedEl.innerHTML = wind + ' wind-speed'
        }
    )
    // will run if there is an error in my code above or the api call fails
    .catch(function(error) {
        // if i make too many API calls in a day I reach my limit and am temporary restricted
        // "call_per_day_limit_reached"
        console.info('error fetching data', { error })
    })
    // will always run after all `.then()`s run
    // will also run after `.catch()`
    .finally(function() {
        document.querySelector('#hidden').style.display = 'block'
    })


function toggleTemperature() {

    // convert to f
    if (measurement === 'c') {
        const newTemp = (temperature * 1.8) + 32
        measurement = 'f'
        displayTemperature(newTemp)
        console.log('convert to F')
        toggleBtn.textContent = 'Switch to Celsius'

    // convert to c
    } else {
        measurement = 'c'
        console.log('convert to C')
        displayTemperature(temperature)
        toggleBtn.textContent = 'Switch to Fahrenheit'
    }

    
}


function displayTemperature(temp) {
    temperatureEl.innerHTML = temp + '<span class="degree">&deg;</span><span class="uom">' + measurement + '</span>'
}
    

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