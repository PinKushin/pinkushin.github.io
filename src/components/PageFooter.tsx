// import React from 'react';
import '../styles/PageFooter.scss';
import logo from '../assets/FullLogoRound.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function PageFooter()
{
    return (
        <footer className="page-footer font-small pt-3">
            <Container className='fluid'>
                <Row>
                    <Col className="md-6 mt-md-0">
                        <Image className='fluid mb-2'
                            src={ logo }
                            alt='logo'
                            id='footerLogo' />
                        <Container>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="mailto: JDMDev4u@gmail.com?cc=pinkushin@verizon.net&subject=Software%20Development%20Quote%20Needed"
                                        target='_blank'
                                        rel='noreferrer'>
                                        <i className="las la-at"></i> E-Mail Me
                                    </a>
                                </li>
                                <li>
                                    <a href='https://github.com/PinKushin'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <i className="lab la-github"></i> GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.linkedin.com/in/john-moore-b32b37259/'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <i className="lab la-linkedin-in"></i> Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.freecodecamp.org/pinkushin'
                                        target='_blank'
                                        rel='noreferrer'>
                                        <i className="lab la-free-code-camp"></i> freeCodeCamp
                                    </a>
                                </li>
                            </ul>
                        </Container>
                    </Col>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <Col className="md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase p-2">Previous Work</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://pinkushin.github.io/markdownpreviewerreact"
                                target='_blank' rel='noreferrer'><i className="lab la-markdown"></i> Markdown Previewer</a>
                            </li>
                            <li><a href="https://pinkushin.github.io/Mobile-Mechanics-LLP/"
                                target='_blank' rel='noreferrer'><i className="las la-car-side"></i> Mobile Mechanics LLP</a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase p-2">Website built using</h5>
                        <ul className="list-unstyled">
                            <li><a
                                href="https://www.icons8.com"
                                title="font icons"><i className="las la-icons"></i> icons8 - Line Awesome icons</a>
                            </li>
                            <li>
                                <i className="lab la-js-square"></i> Typescript
                            </li>
                            <li>
                                <i className="lab la-react"></i> React
                            </li>
                            <li>
                                <i className="lab la-node-js"></i> Node.JS
                            </li>
                            <li>
                                <i className="lab la-bootstrap"></i> Bootstrap
                            </li>
                            <li>
                                <i className="lab la-sass"></i> Sass
                            </li>
                            <li>
                                <i className="lab la-html5"></i> HTML 5
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className="footer-copyright text-center">
                <i className="lar la-copyright"></i>2023 Copyright - <a href="https://pinkushin.github.io">John Moore</a>
            </Container>

        </footer>
    );
}

export default PageFooter;