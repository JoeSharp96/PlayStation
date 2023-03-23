// Bootstrap elements
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// React icons
import { IconContext } from 'react-icons';
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

function Social() {
    return (
        <section className='social py-5'>
            <Container>
                <h1 className='mb-4'>Follow us on social media</h1>
                <Row className='justify-content-center'>
                    <Col className='social-item'>
                        <IconContext.Provider className='social-icon' value={{size: "5.5rem", color: "#393939"}}><BsTwitter /></IconContext.Provider>
                    </Col>
                    <Col className='social-item'>
                        <IconContext.Provider className='social-icon' value={{size: "5.5rem", color: "#393939"}}><BsFacebook /></IconContext.Provider>
                    </Col>
                    <Col className='social-item'>
                        <IconContext.Provider className='social-icon' value={{size: "5.5rem", color: "#393939"}}><BsInstagram /></IconContext.Provider>
                    </Col>
                    <Col className='social-item'>
                        <IconContext.Provider className='social-icon' value={{size: "5.5rem", color: "#393939"}}><BsYoutube /></IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Social;