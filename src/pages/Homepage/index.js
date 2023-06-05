import React from "react";
import { Container } from "react-bootstrap";
import DNavbar from '../../components/Navbar'
import DCarousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";
import DCard from "../../components/Card";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <DNavbar />
      <Container>
        <DCarousel />
        <CarouselCard />
        <DCard />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;