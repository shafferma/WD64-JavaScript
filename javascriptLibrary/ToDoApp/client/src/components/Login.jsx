// const React = require("react"); - same thing below
import React, { useState } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';
import "../styles/Login.css";

//TODO: Build functionality to send info to the api

//Challenge:
//Create 2 state variables, and wire up the two input fields with the state variables

const LoginComponent = (props) => {
    //      var         function
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const triggerEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const triggerPasswordInputChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
     // If both the email and password are present
     // send them off to the api to verify if it is a user
     // if the response is OK, take the token from the response and call the props.authenticateUser function with that token
     // if the response is NOT OK, display an error message, but do nothing.
     if(email && password)  {
        fetch('http://localhost:8080/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        }).then(response => response.json())
        .then(body => {
            props.authenticateUser(body.token);
        })
        .catch(error => console.log(error));
       }
   };

    return (
        <div>
           <Form className="authForm" id="loginForm" onSubmit={handleLoginSubmit}>
               <h3>Login</h3>
               <FormGroup>
                   <Label htmlFor="email">Email:</Label>
                   <Input onChange={triggerEmailInputChange} value={email} id="email" type="email" name="email" />
               </FormGroup>
               <FormGroup>
                   <Label htmlFor="password">Password:</Label>
                   <Input onChange={triggerPasswordInputChange} value={password} id="password" type="password" name="password" /> 
               </FormGroup>
               <Button>Login</Button>
           </Form>
        </div>
    );
};

// Challenge: Create a LOGIN form that has 2 inputs
// input1: email
// input2: passsword
// take note: for == htmlFor

//import your component into the app.js
//MOUNT the component in the App component

// module.export = LoginComponent;
export default LoginComponent;