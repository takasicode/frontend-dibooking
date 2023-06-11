import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';

function DNavbar() {
  const [isOutlineButtonHovered, setOutlineButtonHovered] = useState(false);
  const [isFillButtonHovered, setFillButtonHovered] = useState(false);

  const buttonOutline = {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#ff7315',
    width: '100%',
    height: '50px',
    border: '1px solid #ff7315',
    borderRadius: '0.3rem',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out'
  };

  const buttonOutlineHover = {
    ...buttonOutline,
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.2)'
  };

  const buttonFill = {
    fontWeight: 'bold',
    backgroundColor: '#ff7315',
    color: 'white',
    width: '100%',
    height: '50px',
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

  const [selectedLocation, setSelectedLocation] = useState("Kota Semarang");

  const handleLocationChange = (eventKey) => {
    setSelectedLocation(eventKey);
  };

  const locations = [
    "Banyumanik",
    "Candisari",
    "Gayamsari",
    "Genuk",
    "Gunungpati",
    "Mijen",
    "Ngaliyan",
    "Pedurungan",
    "Semarang Barat",
    "Semarang Selatan",
    "Semarang Tengah",
    "Semarang Timur",
    "Semarang Utara",
    "Tembalang",
    "Tugu"
  ];

  return (
    <Navbar bg="light" expand="lg" className="d-flex flex-column m-0 p-0" style={{ boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.1)" }}>
      <Container className="d-flex flex-row align-items-center mb-2 mt-2">
        <Navbar.Brand href="#" className="d-flex align-items-center" style={{ fontSize: "20px", fontWeight: "bold" }}>
          <img src={logo} className="logo_navbar" alt="Logo Brand" width="90" height="50" />
          Dibooking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto text-center gap-4">
            <Nav.Link href="#promo">Promo</Nav.Link>
            <Nav.Link href="#recommendation">Rekomendasi</Nav.Link>
            <Nav.Link href="#category">Kategori</Nav.Link>
            <Nav.Link href="/about">Tentang Kami</Nav.Link>
          </Nav>
          <Nav className="ms-lg-auto gap-4">
            <Button style={isOutlineButtonHovered ? buttonOutlineHover : buttonOutline}
              onMouseEnter={() => setOutlineButtonHovered(true)}
              onMouseLeave={() => setOutlineButtonHovered(false)}
            >Masuk</Button>
            <Button style={isFillButtonHovered ? buttonFillHover : buttonFill}
              onMouseEnter={() => setFillButtonHovered(true)}
              onMouseLeave={() => setFillButtonHovered(false)}
            >Daftar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div style={{ width: "100%", backgroundColor: "#2f2e41", color: "#ffffff" }}>
        <Container className="d-flex flex-row justify-content-end align-items-center mb-2 mt-2" style={{ fontSize: "12px" }}>
          <p className="mb-0 me-2">Lokasi: </p>
          <NavDropdown
            title={<span>{selectedLocation}</span>}
            id="basic-nav-dropdown"
            onSelect={handleLocationChange}
            align={{ xxxl: 'start' }}
          >
            {locations.map((location, index) => (
              <NavDropdown.Item key={index} href={`${location}`}>
                {location}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Container>
      </div>
    </Navbar>
  );
};

export default DNavbar;