import React, {useState} from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';
import '../App.css';
// import logo from '../assets/book2.jpg'


import {Link} from 'react-router-dom';


const Navigation = (props) => {

const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    
        return (
            <Navbar light expand="md" className="navbar" >

                <img src={logo} alt="loading..." height="50px" style={{margin: '10px', padding: '5px'}} />

                <NavbarBrand href="/" className="mr-auto navbarBrand" style={{color: 'orange'}}><h2>Booklist</h2></NavbarBrand>

                <Link to='/NextPage' style={{float: "right", marginRight: '20px', padding: '10px', color: 'black'}}><h6>Learn About Us</h6></Link>


                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {props.token ?  
                            <Button onClick={props.clickLogout}>Logout</Button> : null} 
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

export default Navigation;