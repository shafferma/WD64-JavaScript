//Challenge" Scaffold out the Navbar component
//use the reactstrap to create the navbar
// brand should say: ToDo
// 2 link: Lists, Login

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button } from 'reactstrap';
import {Link } from 'react-router-dom';

const NavbarComponent = (props) => {
    //      var         function
    const [ isOpen, changeIsOpen ] = useState(false);

    const toggleNavbarMenu = () => changeIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="faded" light> 
            <NavbarBrand>ToDo</NavbarBrand>
            <NavbarToggler onClick={toggleNavbarMenu} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        props.isLoggedIn    
                        ? (
                            <>
                               <NavItem>
                                <p>Lists</p>
                                </NavItem>
                                <NavItem>
                                <p>Logout</p>
                                </NavItem>
                            </>
                        )
                        : (
                            <>
                                <NavItem>
                                <p>Lists</p>
                                </NavItem>
                                <NavItem>
                                <Link to="/login">Login</Link>
                                </NavItem>
                                <NavItem>
                                <Link to="/register">Register</Link>
                                </NavItem>
                            </>
                        )}
                  </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;