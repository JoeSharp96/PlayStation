// Bootstrap elements
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// Section images
import image1 from '../images/hero footer/image1.jpg'
import apex from '../images/hero footer/apex.jpg';
import hogwarts from '../images/hero footer/hogwarts.jpg';
import ps5 from '../images/hero footer/ps5.jpg';
import psvr from '../images/hero footer/psvr.jpg';
import wildHearts from '../images/hero footer/wild hearts.jpg';
import festival from '../images/assets/Festival.png';
// Components
import SectionFooter from './SectionFooter';

// footerContent passed as props to the SectionFooter
let footerContent = [{
    url: image1,
    id: 0,
    class: "hero-footer-item"
    }, {
    url: apex,
    id: 1,
    class: "hero-footer-item"
    }, {
    url: hogwarts,
    id: 2,
    class: "hero-footer-item"
    }, {
    url: ps5,
    id: 3,
    class: "hero-footer-item"
    }, {
    url: psvr,
    id: 4,
    class: "hero-footer-item"
    }, {
    url: wildHearts,
    id: 5,
    class: "hero-footer-item"
    }
]

function Hero() {
    // Hero returns the hero section and hero footer.
    return (
        <section>
            <div className='hero d-flex align-items-center'>
            <Container className='py-5'>
                <img className='mb-2' src={festival} />
                <h1 className='mb-3'>Playstation Plus Festival of Play</h1>
                <p className='mb-4'>From 15-24 Feb, enjoy huge Game Catalogue drops, PS Store Double Discounts, exclusive PS Stars Challenges, Tournaments & more</p>
                <Button className='mb-2' variant='light'>Find out more</Button>
            </Container>
            </div>
            {/* Section footer creates a row of cards dependent on the arr sent to it as a prop */}
            <div className='hero-footer my-5'>
                <SectionFooter arr={footerContent}/>
            </div>
        </section>
    )
}

export default Hero;