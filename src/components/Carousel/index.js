import { Carousel } from 'react-bootstrap';
import sale from '../../assets/images/sale.png';
import './index.css';

function DCarousel() {
  return (
    <Carousel id="promo-diskon">
      <Carousel.Item>
        <img className="d-block w-100" src={sale} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sale} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sale} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default DCarousel;