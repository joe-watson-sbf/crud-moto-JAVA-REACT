import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className="navBar" bg="dark" variant="dark" expand="lg" top='fixed'>
                <Container>
                    <Navbar.Brand >
                        <NavLink to="/">APLICACÍON CRUD MOTO</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
