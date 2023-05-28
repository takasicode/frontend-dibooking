import logo from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavContainer() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className="d-flex"
          style={{ alignItems: "center" }}
        >
          <img src={logo} className="logo_navbar" alt="logo" />
          <h3>Dibooking</h3>
        </Navbar.Brand>
        <Navbar.Toggle id="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* beberapa class tak hapus karena marai navbar e posisi ne ra nggenahb */}
          <Nav className="ms-auto text-center">
            <Nav.Link href="#action1">Promosi</Nav.Link>
            <Nav.Link href="#action2">Rekomendasi</Nav.Link>
            <Nav.Link href="#action2">Kategori</Nav.Link>
            <Nav.Link href="#action2">Tentang Kami</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center">
            <Button className="mx-2" style={{backgroundColor: 'white', color: 'black'}}>
              Masuk
            </Button>
            <Button className="mx-2" style= {{backgroundColor: '#FF7315'}}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;