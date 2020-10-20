//Challenge" Scaffold out the Navbar component
//use the reactstrap to create the navbar
// brand should say: ToDo
// 2 link: Lists, Login

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

const NavbarComponent = () => {
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
                    <NavItem>
                        <p>Lists</p>
                    </NavItem>
                    <NavItem>
                        <p>Login</p>
                    </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;