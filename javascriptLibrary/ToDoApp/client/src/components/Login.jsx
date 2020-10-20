// const React = require("react"); - same thing below
import React, { useState } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap';

//TODO: Build functionality to send info to the api

//Challenge:
//Create 2 state variables, and wire up the two input fields with the state variables

const LoginComponent = () => {

    //      var         function
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const triggerEmailInputChange = (event) => {
        setEmail(event.target.value);
    };

    const triggerPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div>
           <Form>
               <h3>Login</h3>
               <FormGroup>
                   <Label htmlFor="email">Email:</Label>
                   <Input onChange={triggerEmailInputChange} value={email} id="email" type="email" name="email" />
               </FormGroup>
               <FormGroup>
                   <Label htmlFor="password">Password:</Label>
                   <Input onChange={triggerPasswordChange} value={password} id="example" type="password" name="password" /> 
               </FormGroup>
               <Button>Login</Button>
               <p>{email}</p>
               <p>{password}</p>
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