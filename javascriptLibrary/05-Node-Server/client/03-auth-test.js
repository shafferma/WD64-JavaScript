/********************* 
 * FETCH / POST to Auth/Create
 *********************/
function postToAuthRouteCreate() {
    const fetch_url = "http://localhost:3000/authtest/create"
    const accessToken = localStorage.getItem("SessionToken")

    let authTestDataInput = document.getElementById("authTestData").Value;

    let authInputData = { authtestdata: {item: authTestDataInput }};

    const response = fetch(fetch_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
        },
        body: JSON.stringify(authInputData)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/********************* 
 * FETCH / POST to Auth/Create
 *********************/
function getOneByUser() {
    let postIdNumber = document.getElementById("getNumber").value;

    const fetch_url = `http://localhost3000/authtest/${postIdNumber}`
    const accessToken = localStorage.getItem("SessionToken")

    const response = fetch(fetch_url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            let myItem = document.getElementById("getItemValue");
            myItem.innerHTML = response.authtestdata;
        })
    }