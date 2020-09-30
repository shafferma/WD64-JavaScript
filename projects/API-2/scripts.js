const baseUrl = 'http://api.airvisual.com/v2/';
const key = '923d352f-e187-47c0-9271-9f7ae9884c85';
let url;

url = baseUrl + 'nearest_city?key=' + key 


fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(
        function(json){
        console.log(json)
        }
    ) 