import React, {useState} from 'react';
import {Form, Button, Input, FormGroup, Label} from 'reactstrap';
import "../styles/Register.css"

const RegisterComponent = (props) => {
   
    //Challenge: Create the State variable for the input fields
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState ('');
   const [passwordConfirm, setPasswordConfirm] = useState('');

   //Challenge: create the helper functions for the input fields

    const triggerEmailInputChange = (event) => setEmail(event.target.value);
    const triggerPasswordInputChange = (event) => setPassword(event.target.value);
    const triggerPasswordConfirmInputChange = (event) => setPasswordConfirm(event.target.value);

   //Challenge: Create the submit event function that POSTS to the registration route,
   //Think about how to handle a token
   
   const handleUserRegistration = (event)  => {
       event.preventDefault();
       // Procedure: verify there is an email and password
       // Password and Confirm MUST match
       //Register the user using a FETCH -> /user/register
       if (email && password) {
           if(password === passwordConfirm){
               //Register the user
               fetch('http://localhost:8080/user/register', {
                   method: "POST",
                   header: {
                       "Content-Type": "application/json"
                   },
                   body: JSON.stringify({
                       email: email,
                       password: password
                   })
               }).then(response => response.json())
               .then(() => {
                   console.log("User is registered");
                   //TODO: Add login automatically 
               })
               .catch(error => console.log(error))
           } else {
                //TODO: Tooltip instead of alert!!!
               alert("Passwords MUST match!");
           }
       }
   };

   
    return (
        <div className="authForm" id="registerForm">
            <Form onSubmit={handleUserRegistration}>
                <h3>Registration here</h3>
            <FormGroup>
                <Label htmlFor="registerEmail">Email:</Label>
                <Input id="registerEmail" type="email" name="registerEmail" onChange={triggerEmailInputChange} value={email} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="registerPassword">Password:</Label>
                <Input id="registerPassword" type="password" name="registerPassword" onChange={triggerPasswordInputChange} value="{password}" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="registerConfirmPassword">Password Confirm:</Label>
                <Input id="registerConfirmPassword" type="password" name="registerConfirmPassword" onChange={triggerPasswordConfirmInputChange} value={passwordConfirm} />
            </FormGroup>
            <Button>Register</Button>
            </Form>
        </div>
    );
};

export default RegisterComponent;

