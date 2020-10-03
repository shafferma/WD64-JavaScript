const baseUrl = 'http://api.airvisual.com/v2/';
const key = '923d352f-e187-47c0-9271-9f7ae9884c85';
let url = baseUrl + 'nearest_city?key=' + key 

// image element
const weatherImageElement = document.querySelector('.weather');
let locationEl = document.querySelector('.coordinates');
let temperatureEl = document.querySelector('#temperature')

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(
        function(data){
            console.log(data)               // we have access to data 

            //
            
            let city = data.data.city
            let state = data.data.state
            let location = city + ", " + state

            locationEl.textContent = location


            let weatherCode = data.data.current.weather.ic
            weatherImageElement.src = getWeatherImage(weatherCode)

            let temperature = data.data.current.weather.tp
            temperatureEl.innerHTML = temperature + '&#8451;'



        }
    ) 



function getWeatherImage(weatherIconIndex) {

    let imageName = ''

    switch(weatherIconIndex) {
        case '01d':
            imageName = 'clear-sky(day)'
            break;

        case '01n':
            imageName = 'clear-sky(night)'
        break;
    
        case '02d':
            imageName = 'few-clouds(day)'
        break;
    
        case '02n':
            imageName = 'few-clouds(night)'
        break;
    
        case '03d':
            imageName = 'scattered-clouds'
        break;
    
        case '03n':
            imageName = 'scattered-clouds'
        break;

        case '04d':
            imageName = 'broken-clouds'
        break;
    
        case '04n':
            imageName = 'broken-clouds'
        break;
    
        case '09d':
            imageName = 'shower-rain'
        break;

        case '09n':
            imageName = 'shower rain'
        break;

        case '10d':
            imageName = 'rain (day time)'
        break;

        case '10n':
            imageName = 'rain (night time)'
        break;
    }

    return 'assests/' + imageName + '.png'
}