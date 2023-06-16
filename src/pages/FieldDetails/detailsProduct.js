import React, { useState, useEffect  } from "react";
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap";
import { FaMapMarkerAlt, FaStar, FaMosque, FaStore, FaParking, FaWineBottle } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import DNavbar from "../../components/Navbar/navbar";
import Rating from "../../components/Rating/Rating";
import Footer from "../../components/Footer/footer";
import TimeTable from "../../components/formTime/formTime";
import "./detailsProduct.css";
import detail from "../../assets/images/detail-lapangan.png";
import iconProfile from "../../assets/icons/ic_profile.png";
import online from "../../assets/icons/online.png";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FieldDetails() {
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState('');
  const [jam, setJam] = useState('');

  const params = useParams();
  const fieldId = params.id;
  const [field, setField] = useState({});
  const [manager, setManager] = useState({
    name: "",
    nomor_ponsel: ""
  });
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8000/api/lapangan/${fieldId}`);
      const field = response.data.lapangan;
      const manager = response.data.manager;
      setManager({
        name: manager.name,
        nomor_ponsel: `https://wa.me/${manager.nomor_ponsel}`,
      });
      setField(field);
    }
    fetchData();
  }, [fieldId]);

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
    async function fetchData(userId) {
      const resp = await axios.post(`http://localhost:8000/api/pemesanan/add`, {
        idUser: userId,
        idField: fieldId,
        total: (2*field.price),
        tanggal: tanggal,
        jam: jam,
      });
      if (resp.data.status === "success") {
        navigate(`/payment/${resp.data.idPesanan}`);
      }
      else {
        alert("Gagal memesan lapangan!");
      }
    }
    async function cekLogin() {
      const loggedIn = localStorage.getItem("token");
      if (loggedIn) {
        const response = await axios.get(`http://localhost:8000/api/user/profile`, {
          headers: {
            Authorization: `${loggedIn}`,
          },
        });
        const userId = response.data.token.id;
        fetchData(userId);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
      else {
        alert("Anda harus login terlebih dahulu!");
      }
    }
    cekLogin();
  };

  return (
    <>
      <DNavbar />
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
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
          <h3 className="mb-0" style={{ padding: "10px 0 5px 0" }}>{field.title}</h3>
          <p className="mb-0">
            <FaMapMarkerAlt style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />
            {""}{field.location} |{" "}
            <FaStar style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />
            {field.rating} | Tersewa {field.rented} | Buka {field.openTime} - {field.closeTime} WIB
          </p>
          <h2 className="mb-0" style={{ padding: "10px 0 0 0" }}>
            <strong>Rp {field.price}</strong>/jam
          </h2>
        </div>
        <div className="mb-4 mt-4" style={{ display: "flex", height: "fit-content", overflow: "hidden", margin: "auto", }}>
          <Image src={iconProfile} alt="icon profile" style={{ height: "70px", width: "70px" }} className="d-block img-fluid" />
          <div className="informations d-flex justify-content-center align-items-start flex-column h-auto">
            <p className="mb-0" style={{ marginLeft: "15px" }}>
              <span style={{ fontWeight: "700", fontSize: "18px" }}>{manager.name} |</span>{" "}
              <a href={manager.nomor_ponsel} target="_blank" rel="noopener noreferrer" style={{ display: "inline", alignItems: "center", textDecoration: "none" }}>
                <BiMessageDetail style={{ height: "18px", width: "18px", color: "#FF7315" }} />{" "}
                <span style={{ fontWeight: "600", fontSize: "18px", color: "#FF7315" }}>Chat Sekarang</span>
              </a>            </p>
            <p className="mb-0" style={{ marginLeft: "15px", fontSize: "12px", alignItems: "center" }}>
              <Image src={online} alt="online" style={{ height: "15px", width: "15px", marginRight: "5px", marginBottom: "3px" }} />
              Offline | Terakhir online 1 hari yang lalu
            </p>
            <p className="mb-0" style={{ marginLeft: "15px", fontSize: "12px" }}>
              {field.address} , {field.location}
            </p>
          </div>
        </div>
        <div className="mb-4" style={{ height: "fit-content", overflow: "hidden", margin: "auto", }}>
          <h5 className="mb-3" style={{ fontWeight: "700" }}>Fasilitas Lainnya</h5>
          <div className="child-content" style={{ lineHeight: "10px" }}>
            {(field.facilities % 2 === 0) && (
            <p><MdBathroom style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Kamar Mandi</p>
            )} 
            {(field.facilities % 3 === 0) && (
            <p><FaMosque style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Musholla</p>
            )}
            {(field.facilities % 5 === 0) && (
            <p><FaStore style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Kantin</p>
            )}
            {(field.facilities % 7 === 0) && (
            <p><FaParking style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Parkiran Luas</p>
            )}
            {(field.facilities % 11 === 0) && (
            <p><FaWineBottle style={{ color: "#FF7315", marginRight: "5px", marginBottom: "3px" }} />Gratis 2 Botol Minum 1,5 Liter </p>
            )}
          </div>
        </div>
        <div className="mb-4" style={{ height: 'fit-content', margin: 'auto' }}>
            <TimeTable
              openTime={field.openTime}
              closeTime={field.closeTime}
              setTanggal={setTanggal}
              setJam={setJam}
            />
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