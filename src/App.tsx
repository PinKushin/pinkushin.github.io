import React from 'react';
import NavBar from './components/NavBar';
import './styles/App.scss';
import SmallBusisness from './assets/SmallBusisness.jpg';
import JSimg from './assets/JS.jpg';
import logo from './assets/FullLogoRound.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App()
{
    return (
        <nav className="App">
            <NavBar />
            <main>
                <Container>
                    <Row className='m-4 p-4'>
                        <Col sm={ 12 } md={ 8 }>
                            <h1>Hello, I'm John</h1>
                            <p id='welcomeParagraph'>
                                I'm a full stack software developer with experience in C#, XAML, Javascript, Python, ASP.NET, SQL, React, BootStrap, HTML and CSS.
                                Links to some of my work can be found in the navigation bar at the top of the page, as well as links to my <a
                                    href='https://www.github.com/pinkushin' className='App-link'>GitHub</a>, and <a href='https://www.linkedin.com/in/john-moore-b32b37259/' className='App-link'>LinkedIn</a>.
                                You can reach out to me at <a className='App-link' href='JDMDev4u@gmail.com'>JDMDev4u@gmail.com</a> with any questions or for employment.
                            </p>
                        </Col>
                        <Col sm={ 12 } md={ 4 }>
                            <Image className='fluid rounded' src={ logo } alt='logo' id='pageLogo' />
                        </Col>
                    </Row>
                    <Row className='m-4 p-4'>
                        <Col sm={ 12 } md={ 8 }>
                            <Image className='fluid rounded' src={ JSimg } alt='Javascript Code' id='jsImg' />
                        </Col>
                        <Col sm={ 12 } md={ 4 }>
                            <h3 id='pricing'>Pricing</h3>
                            <p>
                                $30 per hour - Negotiable
                            </p>
                            <Image className='fluid rounded' src={ SmallBusisness } alt='Help a small busisness' id='smallBusisnessImg' />
                        </Col>
                    </Row>
                </Container>
            </main>
        </nav>
    );
}

export default App;