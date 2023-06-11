import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import logo from '../../assets/icons/logo.png';

function DNavbarAccount() {
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

  const user = {
    name: "Muhammad Fadhil Abyansyah",
    profile: require("../../assets/images/profile.jpeg")
  };

  return (
    <Navbar bg="light" expand="lg" className="d-flex flex-column m-0 p-0" style={{ boxShadow: "3px 3px 2px rgba(0, 0, 0, 0.1)" }}>
      <Container className="d-flex flex-row align-items-center mb-2 mt-2">
        <Navbar.Brand href="#" className="d-flex align-items-center" style={{ fontSize: "20px", fontWeight: "bold" }}>
          <Image src={logo} className="logo_navbar" alt="Logo Brand" width="90" height="50" />
          Dibooking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-auto text-center gap-4">
            <Nav.Link href="#promo">Promo</Nav.Link>
            <Nav.Link href="#recommendation">Rekomendasi</Nav.Link>
            <Nav.Link href="#category">Kategori</Nav.Link>
            <Nav.Link href="account/about">Tentang Kami</Nav.Link>
          </Nav>
          <Nav className="ms-lg-auto align-items-center">
            <NavDropdown
              align={{ xxxl: 'start' }}
              title={
                <span className="d-inline-flex align-items-center">
                  <span className="me-3">{user.name}</span>
                  <Image src={user.profile} height={"40px"} width={"40px"} roundedCircle />
                </span>
              }
            >
              <NavDropdown.Item href="/saldo">Rp 100.000</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/user">Detail Akun</NavDropdown.Item>
              <NavDropdown.Item href="/booking">Pemesanan</NavDropdown.Item>
              <NavDropdown.Item href="/history">Riwayat Pemesanan</NavDropdown.Item>
              <NavDropdown.Item href="/notification">Notifikasi</NavDropdown.Item>
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
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
    </Navbar >
  );
};

export default DNavbarAccount;