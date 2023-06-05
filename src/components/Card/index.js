import { Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './index.css';

function DCard() {
  const images = [
    {
      src: require('../../assets/icons/ic_football.png'),
      alt: 'Football',
      link: '/sepak-bola',
      title: 'Sepak Bola'
    },
    {
      src: require('../../assets/icons/ic_soccer_ball.png'),
      alt: 'Soccer Ball',
      link: '/futsal',
      title: 'Futsal'
    },
    {
      src: require('../../assets/icons/ic_badminton.png'),
      alt: 'Badminton',
      link: '/bulu-tangkis',
      title: 'Bulu Tangkis'
    },
    {
      src: require('../../assets/icons/ic_basketball.png'),
      alt: 'Basketball',
      link: '/bola-basket',
      title: 'Bola Basket'
    },
    {
      src: require('../../assets/icons/ic_volleyball.png'),
      alt: 'Volleyball',
      link: '/bola-voli',
      title: 'Bola Voli'
    },
    {
      src: require('../../assets/icons/ic_billiards.png'),
      alt: 'Billiards',
      link: '/billiard',
      title: 'Billiard'
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 2,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 3,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 4,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 5,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 6,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 7,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
    {
      id: 8,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
  ];

  return (
    <div className="group-categories mt-5" id="kategori">
      <div className="categories-icons">
        <h3 className="title mt-5 mb-4">Kategori Lapangan</h3>
        <Row className="categories-logo g-5 justify-content-lg-center">
          {images.map((image, index) => (
            <Col key={index} xl={2} lg={2} md={4} sm={6} xs={6} className="d-flex justify-content-center">
              <div className="image-wrapper image-container">
                <Link to={image.link}>
                  <Image src={image.src} alt={image.alt} width={60} height={60} className="animate-image" />
                </Link>
              </div>
              <div className="image-title">{image.title}</div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="categories-products">
        {products.map((item) => (
          <Card key={item.id}>
            <Link to={`/detail-produk/${item.id}`}>
              <Card.Img variant="top" src={item.imageSrc} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="price">{item.price}</Card.Text>
                <hr className="my-4" />
                <Card.Text className="d-flex align-items-center">
                  <FaMapMarkerAlt className="icon-location" />{" "}
                  {item.location}
                </Card.Text>
                <Card.Text className="d-flex align-items-center">
                  <FaStar className="icon-star" />{" "}
                  {item.rating} | Tersewa {item.rented}
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DCard;
