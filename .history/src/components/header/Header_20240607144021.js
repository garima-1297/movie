import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import NavLink from 'react-bootstrap';
export const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className='me-auto my-2 my-lg-0'
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/watchList">Home</NavLink>
                        </Nav>
                        <Button variant="outline-info">Login</Button>
                        <Button variant="outline-info">Register</Button>
                    </Navbar.Collapse>
                </Navbar.Toggle>
            </Container>

        </Navbar>
    )
}
