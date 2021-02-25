import React, {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const Nav = (props) => {
    return (
        <Navbar color="faded" light expand="md">
        <NavbarBrand href= "/">Bookworm</NavbarBrand>
        </Navbar>
    )
}

export default Navbar;