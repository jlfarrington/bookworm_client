import React, {useState} from 'react';
import {  
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import './navbar.css'

const Sitebar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen)}

    return (
        <Navbar color="#0d47a1" light expand="md">
            <NavbarBrand id="brand" href="/">BookWorm</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button id="button" onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )    
};


export default Sitebar;
