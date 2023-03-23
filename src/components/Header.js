// Bootstrap elements
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Icons from react-icons: https://react-icons.github.io/react-icons
import { IconContext } from 'react-icons';
import { FaPlaystation } from 'react-icons/fa';

function Header() {
    return (
        <Navbar fixed='top'>
            <Navbar.Brand><IconContext.Provider value={{size: "2.5rem", color: "#0070cc"}}><FaPlaystation /></IconContext.Provider></Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link>Games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Hardware</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Support</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* Second nav content sent to end using justify content end */}
            <Navbar.Collapse className='justify-content-end'>
                <Nav className='justify-content-end'>
                    <Nav.Item>
                        <Button>Sign In</Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            />
                        </Form>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;