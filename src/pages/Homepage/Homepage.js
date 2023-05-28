import React from "react";
import Carousel from "react-bootstrap/Carousel";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import sale from '.../assets/sale'
import lpng from '.../assets/lpng'
import bola from '.../assets/bola'
import futsal from '.../assets/futsal'
import bulutangkis from '.../assets/bulutangkis'
import basket from '.../assets/basket'
import voli from '.../assets/voli'
import billiard from '.../assets/billiard'

function HomePage() {
  return (
    <div>
      <div
        className="d-flex flex-row mb-3 px-5 justify-content-end align-items-center"
        style={{ backgroundColor: "#2F2E41", height: "64px", color: "white" }}
      >
        <p style={{ margin: "0", marginRight: "10px" }}>Lokasi : </p>
        <NavDropdown
          title={<span style={{ color: "white" }}>Jakarta</span>}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Semarang</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Surabaya</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">ETC</NavDropdown.Item>
        </NavDropdown>
      </div>
      <Carousel
        fade
        style={{
          borderRadius: "20px",
          maxHeight: "380px",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Carousel.Item style={{ height: "100%", width: "100%" }}>
          <img className="d-block w-100 p-2" src={sale} alt="First slide" />
        </Carousel.Item>
      </Carousel>

      <section
        className="mt-5"
        style={{
          height: "fit-content",
          maxWidth: "1200px",
          overflow: "hidden",
          margin: "auto",
        }}
      >
        <h3 className="mb-4" style={{ padding: "10px" }}>
          Rekomendasi Lapangan
        </h3>
        <div
          className="wrapper"
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Kategori Lapangan */}
      <section
        className="mt-5"
        style={{
          display: "flex",
          height: "fit-content",
          flexDirection: "column",
          maxWidth: "1200px",
          margin: "auto",
          justifyContent: "center",
          padding: "15px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "50px" }}>
          Kategori Lapangan
        </h3>
        <Row
          className="justify-content-md-center"
        >
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={bola}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={futsal}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={bulutangkis}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={basket}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={voli}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
          <Col
            md={4}
            lg={2}
            sm={6}
            className="d-flex justify-content-center py-3"
          >
            <img
              src={billiard}
              style={{
                boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
              }}
              className="img-fluid d-block"
              alt="bola"
            />
          </Col>
        </Row>

        <div
          className="wrapper"
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "170px",
          }}
        >
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ maxWidth: "18rem", border: "0" }}>
            <Card.Img
              variant="top"
              src={lpng}
              style={{
                borderRadius: "5px",
                maxHeight: "165px",
                maxWidth: "278px",
              }}
            />
            <Card.Body style={{ padding: "0" }}>
              <Card.Text>
                <p>Jaksel Futsal</p>
              </Card.Text>
              <Card.Text>
                <h5>RP 75.000</h5>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaMapMarkerAlt
                    className="d-flex align-items-center"
                    style={{ color: "#FF7315", marginRight: "5px" }}
                  />{" "}
                  Jakarta Selatan
                </p>
              </Card.Text>
              <Card.Text>
                <p className="d-flex align-items-center">
                  <FaStar style={{ color: "#FF7315", marginRight: "5px" }} />{" "}
                  4.8 | Tersewa 27
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default HomePage;