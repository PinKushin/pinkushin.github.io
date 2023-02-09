import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import './styles/App.scss';
//import SmallBusisness from './assets/SmallBusisness.jpg';
import JSimg from './assets/JS.jpg';
//import logo from './assets/FullLogoRound.png';
import cog from './assets/CogRound.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import PageFooter from './components/PageFooter';

const loader = document.querySelector<HTMLElement>( '.loader' );
if ( !loader )
{
    throw new DOMException( 'preload image not found' );
}

interface Props
{
}

const App : React.FC<Props> = () =>
{
    const [ title, /*setTitle*/ ] = useState( 'JDM Development' );
    // const [ theme, setTheme ] = useState<string>( 'default' );

    // if you want to show the loader when React loads data again
    // const showLoader = () => loader.classList.remove( 'loader--hide' );
    const hideLoader = () => loader.classList.add( 'loader--hide' );
    useEffect( hideLoader );
    useEffect( () =>
    {
        document.title = title;
    }, [ title ] );

    return (
        <nav className="App">
            <NavBar />
            <main>
                <Container>
                    <Row className='m-4 p-4'>
                        <Col sm={ 12 } md={ 8 }>
                            <h1>Hi, I'm John</h1>
                            <p id='welcomeParagraph'>
                                I'm a full stack software developer with experience in C#, XAML, Javascript, Python, ASP.NET, SQL, React, BootStrap, HTML and CSS.
                                Links to some of my work can be found in the navigation bar at the top of the page, as well as links to my <a
                                    href='https://www.github.com/pinkushin'
                                    className='App-link'>
                                    <i className="lab la-github"></i> GitHub</a>, and <a
                                        href='https://www.linkedin.com/in/john-moore-b32b37259/'
                                        className='App-link'><i className="lab la-linkedin"></i> LinkedIn</a>.
                                You can reach out to me at <a className='App-link'
                                    href='mailto: JDMDev4u@gmail.com?subject=Software%20Development%20Quote%20Needed&cc=PinKushin@verizon.net'>JDMDev4u@gmail.com</a> with any questions or employment opportunities. Thank you for your consideration.
                            </p>
                        </Col>
                        <Col sm={ 12 } md={ 4 }>
                            <Image className='fluid'
                                src={ cog }
                                alt='cog logo'
                                id='cogLogo' />
                        </Col>
                    </Row>
                    <Row className='m-4 p-4'>
                        <Col sm={ 12 } md={ 6 }>
                            <Image className='fluid rounded'
                                src={ JSimg }
                                alt='Javascript Code'
                                id='pricingImg' />
                        </Col>
                        <Col sm={ 12 } md={ 6 }>
                            <h3 id='pricing'>Pricing</h3>
                            <p>
                                $30 per hour - Minimum <br />
                                A normal estimate is 4-8 hours per page, for a mildly interactive site.
                                Static Pages, like this page, are normally 2-4 hours per page.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </main>
            <PageFooter />
        </nav>
    );
};

export default App;