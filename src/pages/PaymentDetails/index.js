import React, { useState } from 'react';
import { Container, Image, Form, Button } from 'react-bootstrap';
import { BiUserCircle, BiMessageDetail } from "react-icons/bi";
import { GiSoccerField } from "react-icons/gi";
import iconProfileBox from '../../assets/icons/ic_profile_box.png';
import { FaMoneyBillWave } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import Spinner from "react-bootstrap/Spinner";

function PaymentDetails() {
  const [isOutlineButtonHovered, setOutlineButtonHovered] = useState(false);
  const [isFillButtonHovered, setFillButtonHovered] = useState(false);

  const buttonOutline = {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#ff7315',
    width: '100%',
    height: '50px',
    marginRight: '8px',
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
    marginLeft: '8px',
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
      <Container>
        <div className="mt-4 mb-5" style={{ height: "fit-content", overflow: "hidden", margin: "auto", }}>
          <div className="mb-5">
            <p className="d-flex align-items-center mb-2" style={{ color: "#FF7315", fontWeight: "700" }}>
              <BiUserCircle style={{ color: "#FF7315", marginRight: "5px", height: "25px", width: "25px" }} />
              Penyewa
            </p>
            <p className="mb-0" style={{ fontWeight: "700" }}>John Doe</p>
            <p className="mb-0" style={{ fontWeight: "700" }}>082134554212</p>
            <p className="mb-0" style={{ color: "#666666" }}>
              Jl. Suyono Ardianto, Perum. Jaya Wijaya Blok A No. 24, Jakarta Selatan
            </p>
          </div>
          <div className="mb-5">
            <p className="d-flex align-items-center mb-2" style={{ color: "#FF7315", fontWeight: "700" }}>
              <GiSoccerField style={{ color: "#FF7315", marginRight: "5px", height: "30px", width: "30px" }} />
              Lapangan Dipesan
            </p>
            <p className="mb-1">
              <span style={{ fontWeight: "700" }}>Jakselmania FC</span> |{" "}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ display: "inline", alignItems: "center", textDecoration: "none" }}>
                <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
                <span style={{ color: "#FF7315", fontWeight: "600" }}>Chat Sekarang</span>
              </a>
            </p>
            <div className="mb-2" style={{ display: "flex", height: "fit-content", overflow: "hidden", margin: "auto", borderBottom: "1px solid black", paddingBottom: "10px" }}>
              <Image src={iconProfileBox} alt="Profile Box" style={{ height: "60px", width: "75px" }} />
              <div className="content" style={{ alignItems: "center" }}>
                <p className="mb-1" style={{ marginLeft: "10px", fontWeight: "700", fontSize: "12px" }}>
                  Lapangan Futsal Jakselmania
                </p>
                <p className="mb-0" style={{ marginLeft: "10px", color: "#666666", fontSize: "12px" }}>
                  Waktu : 21-05-2023 | 08.00 - 09.00 WIB
                </p>
                <p className="mb-0" style={{ marginLeft: "10px", color: "#666666", fontSize: "12px" }}>
                  Harga : Rp 75.000/Jam
                </p>
              </div>
            </div>
            <p className="d-flex justify-content-between align-content-center" style={{ fontWeight: "500" }}>
              Total Harga{" "}
              <span>Rp 75.000</span>
            </p>
          </div>
          <div className="mb-0">
            <p className="d-flex align-items-center mb-2" style={{ color: "#FF7315", fontWeight: "700" }}>
              <FaMoneyBillWave style={{ color: "#FF7315", marginRight: "5px", height: "30px", width: "30px" }} />
              Pembayaran
            </p>
            <p style={{ fontSize: "13px", borderBottom: "1px solid black", paddingBottom: "10px" }}>
              Saldo DibookingPay : <strong>Rp 100.000,-</strong>
            </p>
            <div className="d-flex flex-column justify-content-end"></div>
            <div className="d-flex flex-column flex-wrap align-content-end" style={{ borderBottom: "1px solid black", paddingBottom: "15px" }}>
              <div style={{ width: "20rem" }}>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">Status</p>
                  <p className="mb-1">Lunas</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">Metode Pembayaran </p>
                  <p className="mb-1">DibookingPay</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-1">Total Pembayaran </p>
                  <p className="mb-1" style={{ fontWeight: "700" }}>Rp 75.000</p>
                </div>
              </div>
            </div>
            <p style={{ color: "red", fontSize: "12px" }} className="d-flex align-items-center mt-1 mb-0">
              <CiCircleAlert size={20} />
              <span className="ms-1">Mohon selesaikan pembayaran secepatnya.</span>
            </p>
            <div className="d-flex flex-column flex-wrap align-content-end">
              <Form className="d-flex justify-content-center pt-2" style={{ width: "100%", maxWidth: "25rem" }}>
                <Button style={isOutlineButtonHovered ? buttonOutlineHover : buttonOutline}
                  onMouseEnter={() => setOutlineButtonHovered(true)}
                  onMouseLeave={() => setOutlineButtonHovered(false)}
                >
                  Batal
                </Button>
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
                    'Bayar Sekarang'
                  )}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container >
    </>
  )
}

export default PaymentDetails;