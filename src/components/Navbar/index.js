import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, ThemeProvider } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';
import DButton from '../../components/Button';
import './index.css';

function DNavbar() {
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
    <Navbar bg="light" expand="lg" className="navbar-dibooking d-flex flex-column m-0 p-0">
      <Container className="d-flex flex-row justify-content-end align-items-center mb-2 mt-2">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} className="logo_navbar" alt="logo" width="90" height="50" />
          Dibooking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto text-center gap-4">
            <Nav.Link href="#promo-diskon">Promo & Diskon</Nav.Link>
            <Nav.Link href="#rekomendasi">Rekomendasi</Nav.Link>
            <Nav.Link href="#kategori">Kategori</Nav.Link>
            <Nav.Link href="/tentang-kami">Tentang Kami</Nav.Link>
          </Nav>
          <Nav className="ms-lg-auto gap-4">
            <ThemeProvider prefixes={{ btn: 'btn-outline' }}>
              <DButton variant="primary">Masuk</DButton>
            </ThemeProvider>
            <ThemeProvider prefixes={{ btn: 'btn-fill' }}>
              <DButton variant="primary">Daftar</DButton>
            </ThemeProvider>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="locations">
        <Container className="d-flex flex-row justify-content-end align-items-center mb-2 mt-2">
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