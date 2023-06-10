import React, { useState } from "react";
import NavbarAccount from "../../components/NavbarAccount";
import detail from "../../assets/images/detail-lapangan.png";
import Footer from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaStar, FaMosque, FaStore, FaParking, FaWineBottle } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import iconProfile from "../../assets/icons/ic_profile.png";
import online from "../../assets/icons/online.png";
import { BiMessageDetail } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Rating from "../../components/Rating/Rating";
import "./index.css";
import Spinner from "react-bootstrap/Spinner";

function FieldDetails() {
  const [isFillButtonHovered, setFillButtonHovered] = useState(false);

  const buttonFill = {
    fontWeight: 'bold',
    backgroundColor: '#ff7315',
    color: 'white',
    width: '100%',
    height: '50px',
    marginTop: '1rem',
    border: 'none',
    borderRadius: '0.3rem',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out'
  };

  const buttonFillHover = {
    ...buttonFill,
    backgroundColor: '#ff8f44',
    color: '#ffffff',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.2)'
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <NavbarAccount />
      <Container>
        <Row className="justify-content-center align-items-center pt-4">
          <Col lg={8} md={12} className="text-center mb-3">
            <Image src={detail} alt="detail lapangan" className="img-fluid" />
          </Col>
          <Col lg={4} md={12} className="text-center">
            <Row>
              <Col lg={12} md={6} sm={6} xs={6} className="mb-3">
                <Image src={detail} alt="detail lapangan" className="img-fluid" style={{ width: "100%" }} />
              </Col>
              <Col lg={12} md={6} sm={6} xs={6} className="mb-3">
                <Image src={detail} alt="detail lapangan" className="img-fluid" style={{ width: "100%" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="informations-account" style={{ height: "fit-content", overflow: "hidden", margin: "auto" }}>
          <h3 className="mb-0" style={{ padding: "10px 0 5px 0" }}>Lapangan Futsal Jakselmania</h3>
          <p className="mb-0">
            <FaMapMarkerAlt style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />
            {""}Jakarta Selatan |{" "}
            <FaStar style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />
            4.8 | Tersewa 36 | Buka 08.00 - 22.00 WIB
          </p>
          <h2 className="mb-0" style={{ padding: "10px 0 0 0" }}>
            <strong>Rp 75.000</strong>/jam
          </h2>
        </div>
        <div className="mb-4 mt-4" style={{ display: "flex", height: "fit-content", overflow: "hidden", margin: "auto", }}>
          <Image src={iconProfile} alt="icon profile" style={{ height: "70px", width: "70px" }} className="d-block img-fluid" />
          <div className="informations d-flex justify-content-center align-items-start flex-column h-auto">
            <p className="mb-0" style={{ marginLeft: "15px" }}>
              <span style={{ fontWeight: "700", fontSize: "18px" }}>Jakselmania FC |</span>{" "}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ display: "inline", alignItems: "center", textDecoration: "none" }}>
                <BiMessageDetail style={{ height: "18px", width: "18px", color: "#FF7315" }} />{" "}
                <span style={{ fontWeight: "600", fontSize: "18px", color: "#FF7315" }}>Chat Sekarang</span>
              </a>            </p>
            <p className="mb-0" style={{ marginLeft: "15px", fontSize: "12px", alignItems: "center" }}>
              <Image src={online} alt="online" style={{ height: "15px", width: "15px", marginRight: "5px", marginBottom: "3px" }} />
              Online | Terakhir online 27 menit lalu
            </p>
            <p className="mb-0" style={{ marginLeft: "15px", fontSize: "12px" }}>
              Jl. Jaksel Permata Indah No.12, Jakarta Selatan
            </p>
          </div>
        </div>
        <div className="mb-4" style={{ height: "fit-content", overflow: "hidden", margin: "auto", }}>
          <h5 className="mb-3" style={{ fontWeight: "700" }}>Fasilitas Lainnya</h5>
          <div className="child-content" style={{ lineHeight: "10px" }}>
            <p><MdBathroom style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Kamar Mandi</p>
            <p><FaMosque style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Musholla</p>
            <p><FaStore style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Kantin</p>
            <p><FaParking style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Parkiran Luas</p>
            <p><FaWineBottle style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Gratis 2 Botol Minum 1,5 Liter </p>
          </div>
        </div>
        <div className="mb-4" style={{ height: 'fit-content', margin: 'auto' }}>
          <Button
            style={isFillButtonHovered ? buttonFillHover : buttonFill}
            disabled={isLoading}
            onClick={handleClick}
            onMouseEnter={() => setFillButtonHovered(true)}
            onMouseLeave={() => setFillButtonHovered(false)}
          >
            {isLoading ? (
              <>
                <Spinner animation="border" size="sm" className="mr-4" /> Loading...
              </>
            ) : (
              'Booking Sekarang'
            )}
          </Button>
        </div>
        <Rating />
      </Container >
      <Footer />
    </>
  );
}

export default FieldDetails;