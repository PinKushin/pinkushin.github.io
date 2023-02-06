import React from 'react';
import logo from '../assets/FullLogoRound.png';
import '../styles/NavBar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar()
{
    return (
        <Navbar collapseOnSelect expand="md" variant='dark' className='p-1'>
            <Container>
                <Navbar.Brand href="./" className='nav-title'><img src={ logo } className="brand-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://pinkushin.github.io/markdownpreviewerreact">Markdown Previewer</Nav.Link>
                        <Nav.Link href="https://pinkushin.github.io/Mobile-Mechanics-LLP/">Mobile Mechanics LLP</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="https://www.github.com/pinkushin">GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/john-moore-b32b37259/">LinkedIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;