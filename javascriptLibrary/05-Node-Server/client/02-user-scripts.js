/***********************
 * POST - /createuser
***********************/ 
function userSignUp(){
    let userName = document.getElementById("userSignUp").Value;
    let userPass = document.getElementById("passSignUp").value;
    console.log(userName, userPass);

    let userData = {user : {username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', { 
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem("SessionToken", token);
    });
};

function userSignIn(){
    let userName = document.getElementById("userSignin").Value;
    let userPass = document.getElementById("passSignin").value;
    console.log(userName, userPass);

    let userData = {user : {username: userName, password: userPass}};
    fetch('http://localhost:3000/api/user/signin', { 
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem("SessionToken", token);
    });
};

/**************************
* HELPER FUNCTION FOR TOKEN
***************************/