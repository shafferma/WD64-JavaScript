function fetchAllFromAuthRoute() {
    const fetch_url = `http://localhost:3000/authtest/getall`
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
        .then(data => {
            console.log(data)
        })
}