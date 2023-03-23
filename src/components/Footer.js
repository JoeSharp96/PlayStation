// Bootstrap elements
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// React Icons
import { IconContext } from 'react-icons';
import { FaPlaystation } from 'react-icons/fa';

function Footer() {
    return (
        <Container className='py-3'>
            <Row className='py-4'>
                <IconContext.Provider value={{size: "5rem", color: "white"}}><FaPlaystation /></IconContext.Provider>
            </Row>
            <Row className='py-4'>
                <Col>
                    <Nav className='flex-column'>
                        <Navbar.Brand>About</Navbar.Brand>
                        <Nav.Link>About SIE</Nav.Link>
                        <Nav.Link>Careers</Nav.Link>
                        <Nav.Link>PlayStation Studios</Nav.Link>
                        <Nav.Link>Corporate</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column'>
                        <Navbar.Brand>Products</Navbar.Brand>
                        <Nav.Link>PS5</Nav.Link>
                        <Nav.Link>PS VR</Nav.Link>
                        <Nav.Link>PS Plus</Nav.Link>
                        <Nav.Link>Accessories</Nav.Link>
                        <Nav.Link>Games</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column'>
                        <Navbar.Brand>Values</Navbar.Brand>
                        <Nav.Link>Environment</Nav.Link>
                        <Nav.Link>Accessibility</Nav.Link>
                        <Nav.Link>Online Safety</Nav.Link>
                        <Nav.Link>Diversity, equality & inclusion</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column'>
                        <Navbar.Brand>Support</Navbar.Brand>
                        <Nav.Link>Support Hub</Nav.Link>
                        <Nav.Link>PlayStation Safety</Nav.Link>
                        <Nav.Link>PSN Status</Nav.Link>
                        <Nav.Link>PlayStation Repairs</Nav.Link>
                        <Nav.Link>Password Reset</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Nav className='flex-column'>
                        <Navbar.Brand>Resources</Navbar.Brand>
                        <Nav.Link>PSN terms of service</Nav.Link>
                        <Nav.Link>PS Store cancellation policy</Nav.Link>
                        <Nav.Link>Modern slavery act statement</Nav.Link>
                        <Nav.Link>Age ratings</Nav.Link>
                        <Nav.Link>Health warning</Nav.Link>
                        <Nav.Link>Developers</Nav.Link>
                        <Nav.Link>Glossary</Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <p>This page was made as part of the HyperionDev Bootcamp Task 49. The page was based on the real UK PlayStation website: <a href="https://www.playstation.com/en-gb/" target="_blank">https://www.playstation.com/en-gb/</a></p>
        </Container>
    )
}

export default Footer;