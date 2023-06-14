import React from "react";
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import DCarousel from "../../components/Carousel/carousel";
import Footer from "../../components/Footer/footer";
import './home.css';
import DNavbar from "../../components/Navbar/navbar";
import { carouselItems, images, products } from "./dummy";

function HomePage() {
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

  return (
    <>
      <DNavbar />
      <Container className="py-5">
        <DCarousel />
        <div className="multi-carousel-card mt-5" id="recommendation">
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
                  <Card.Link href={`${card.link}`}>
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
        <div className="group-categories mt-5" id="category">
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
                <Link to={`${item.link}`}>
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
      </Container >
      <Footer />
    </>
  );
}

export default HomePage;