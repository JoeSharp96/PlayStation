// Bootstrap elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Section images
import mindfulness from '../images/month footer/mindfulness.jpg';
import games from '../images/month footer/games.jpg';
import edgeController from '../images/month footer/edge controller.jpg'
// Components
import SectionFooter from './SectionFooter';

// Array for section footer
const monthItems = [
    {
        url: edgeController,
        id: 0,
        class: "month-footer-item",
        caption: "How the DualSense Edge wireless controller can raise your game"
    }, {
        url: games,
        id: 1,
        class: "month-footer-item",
        caption: "23 great games to look forward to in 2023"
    }, {
        url: mindfulness,
        id: 2,
        class: "month-footer-item",
        caption: "The PlayStation guide to wellbeing and mindfulness"
    }
]    

function ThisMonth() {
    return (
        <section className='this-month py-5'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={7} >
                        <div className='heading my-4'>
                            <h1>This Month</h1>
                            <h1 className='bold'>On PlayStation</h1>
                        </div>
                        <h4 className='mb-4'>Check out this month's biggest releases along with dedicated features, guides and more.</h4>
                        <div className='buttons mb-5'>
                            <Button id='month-btn-primary' variant='primary'>Find out more</Button>
                        </div>
                    </Col>
                    <Col md={5}>
                    </Col>
                </Row>
            </Container>
            <div className='month-footer mt-5 pb-3'>
                <SectionFooter arr={monthItems}/>
            </div>
        </section>
    )
}

export default ThisMonth;