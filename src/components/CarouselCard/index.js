import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './index.css';

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselItems = [
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
      id: 1,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
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
      id: 1,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
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
      id: 1,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
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
      id: 1,
      title: 'Jaksel Futsal',
      price: 'Rp 75.000',
      location: 'Jakarta Selatan',
      rating: '4.8',
      rented: '27',
      imageSrc: require('../../assets/images/lapangan.jpeg')
    },
  ];

  return (
    <div className="multi-carousel-card mt-5" id="rekomendasi">
      <h3 className="title mt-5 mb-4" >Rekomendasi Lapangan</h3>
      <div className="wrapper">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5s"
          transitionDuration={500}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={'desktop'}
        >
          {carouselItems.map((card) => (
            <Card key={card.id}>
              <Card.Link href="/detail-produk/id">
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="price">{card.price}</Card.Text>
                  <hr className="my-4" />
                  <Card.Text className="d-flex align-items-center">
                    <FaMapMarkerAlt className="icon-location" /> {card.location}
                  </Card.Text>
                  <Card.Text className="d-flex align-items-center">
                    <FaStar className="icon-star" /> {card.rating} | Tersewa {card.rented}
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;