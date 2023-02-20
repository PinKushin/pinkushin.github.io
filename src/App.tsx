/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import
{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/App.scss';

import SmallBusisness from './assets/SmallBusisness.jpg';
import JSimg from './assets/JS.jpg';
import CS50x from './assets/CS50x.png';
import GMCert from './assets/BecomeAGameMakerCert.jpg';
import HtmlCert from './assets/HtmlCert.png';
import JSCert from './assets/JavaScriptCert.png';
import logo from './assets/FullLogoRound.png';
import cog from './assets/CogRound.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import PageFooter from './components/PageFooter';
import Button from 'react-bootstrap/esm/Button';

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
    const showLoader = () => loader.classList.remove( 'loader--hide' );
    const hideLoader = () => loader.classList.add( 'loader--hide' );
    useEffect( hideLoader );
    useEffect( () =>
    {
        document.title = title;
    }, [ title ] );
    function toggleCerts(): void {
        showLoader();
        const certs = document.querySelector<HTMLElement>('.carousel');
        if (!certs) {
            throw new DOMException('certification images not found');
        }
        if (!certs.classList.contains('visually-hidden')) {
            certs.classList.add('visually-hidden');
            hideLoader();
            return;
        }
        certs.classList.remove('visually-hidden');
        hideLoader();
    }
    return (
        <nav className="App">
            <NavBar />
            <main>
                <Container>
                    <Row>
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
                                    href='mailto: JDMDev4u@gmail.com?subject=Software%20Development%20Quote%20Needed&cc=PinKushin@verizon.net'><i className="lar la-envelope"></i> JDMDev4u@gmail.com</a> with any questions or employment opportunities. Thank you for your consideration.
                            </p>
                        </Col>
                        <Col sm={ 12 } md={ 4 }>
                            <Image className='fluid'
                                src={ cog }
                                alt='cog logo'
                                id='cogLogo' />
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col sm={ 12 } md={ 6 }>
                            <Image className='fluid rounded'
                                src={ JSimg }
                                alt='Javascript Code'
                                id='pricingImg' />
                        </Col>
                        <Col sm={ 12 } md={ 6 }>
                            <h3 id='pricing'>Pricing</h3>
                            <p>
                                $20 usd per hour - Minimum <br />
                                A normal estimate is 4-8 hours per page, for a mildly interactive site.
                                Static Pages, like this page, are normally 2-4 hours per page.
                                Time is tracked using WakaTime, you only pay for the time spent
                                writing your application.
                            </p>

                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Button as='h4'
                            variant='dark'
                            onClick={ toggleCerts }
                            id='certsHeader'>
                                Certificates
                        </Button>
                        <Carousel variant='dark'
                            fade={ true }
                            indicators={ false }
                            className='visually-hidden'>
                            <Carousel.Item>
                                <Image src={ CS50x }
                                    alt='CS50x Certification'
                                    className='certs fluid rounded'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={ HtmlCert }
                                    alt='HTML Certification'
                                    className='certs fluid rounded'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={ JSCert }
                                    className='certs fluid rounded'
                                    alt='JavaScript Certification'/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={ GMCert }
                                    alt='GameMaker Certification'
                                    className='certs fluid rounded'/>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </main>
            <PageFooter />
        </nav>
    );
};

export default App;