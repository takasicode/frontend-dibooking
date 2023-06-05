import React from "react";
import { Container } from "react-bootstrap";
import DNavbarAccount from '../../components/NavbarAccount'
import DCarousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";
import DCard from "../../components/Card";
import Footer from "../../components/Footer";

function HomePageAccount() {
  return (
    <>
      <DNavbarAccount />
      <Container>
        <DCarousel />
        <CarouselCard />
        <DCard />
      </Container>
      <Footer />
    </>
  );
}

export default HomePageAccount;