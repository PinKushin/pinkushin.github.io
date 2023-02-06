import React from 'react';
import logo from '../assets/FullLogoRound.png';
import '../styles/NavBar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar()
{
    return (
        <Navbar className='p-1' collapseOnSelect expand="md" variant='dark'>
            <Container>
                <Navbar.Brand href="./" className='nav-title'><img src={ logo } className="brand-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./">
                            <i className="las la-home"></i>Home
                        </Nav.Link>
                        <Nav.Link href="https://pinkushin.github.io/markdownpreviewerreact"
                            target='_blank'
                            rel='noreferrer'>
                            <i className="lab la-markdown"></i> Markdown Previewer
                        </Nav.Link>
                        <Nav.Link href="https://pinkushin.github.io/Mobile-Mechanics-LLP/"
                            target='_blank'
                            rel='noreferrer'>
                            <i className="las la-car-side"></i> Mobile Mechanics LLP
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <i className="las la-dollar-sign"></i> Pricing
                        </Nav.Link>
                        <Nav.Link href="https://www.github.com/pinkushin"
                            target='_blank'
                            rel='noreferrer'>
                            <i className="lab la-github"></i> GitHub
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/john-moore-b32b37259/"
                            target='_blank'
                            rel='noreferrer'>
                            <i className="lab la-linkedin"></i> LinkedIn
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;