// Bootstrap elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Section images
import psPlusFeb from '../images/psplus/ps plus feb.png';
import psPlusLogo from '../images/psplus/ps plus logo.png';

function PlayStationPlus() {
    return (
        <section className='playstation-plus py-5'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={7} >
                        <img src={psPlusLogo} className='mb-4 logo' />
                        <h5 className='mb-4 me-5'>Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and more.</h5>
                        <div className='buttons'>
                            <Button id='playstation-plus-btn-primary' variant='primary'>Explore PlayStation Plus</Button>
                        </div>
                    </Col>
                    <Col md={5}>
                        <img src={psPlusFeb} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PlayStationPlus;