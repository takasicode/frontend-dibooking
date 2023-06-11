import React from "react";
import { Container, Image, Form, Button } from "react-bootstrap";
import { BiMessageDetail } from "react-icons/bi";
import iconProfileBox from "../../assets/icons/ic_profile_box.png";
import DNavbarAccount from "../../components/NavbarAccount/navbarAccount";
import Footer from "../../components/Footer/footer";

function History() {
  const dataPemesanan = {
    namaManajemen: "Semarang FC",
    namaLapangan: "Semarang Stadium",
    statusPemesanan: "Belum Dibayar",
    tanggalPemesanan: "21-05-2023",
    jamPemesanan: "19.00 - 20.00 WIB",
    hargaSewa: "Rp 75.000/Jam",
    totalPembayaran: "Rp 75.000"
  };

  let statusColor;
  let statusText;

  switch (dataPemesanan.statusPemesanan) {
    case "Belum Dibayar":
      statusColor = "#FF0000";
      statusText = "Belum dibayar";
      break;
    case "Menunggu Konfirmasi":
      statusColor = "#FFBD15";
      statusText = "Menunggu Konfirmasi";
      break;
    case "Sudah Dipesan":
      statusColor = "#43C914";
      statusText = "Sudah Dipesan";
      break;
    default:
      statusColor = "#000000";
      statusText = "Status Tidak Valid";
  }

  const [isFillButtonHovered, setFillButtonHovered] = React.useState(false);
  const [isOutlineButtonHovered, setOutlineButtonHovered] = React.useState(false);

  const buttonFill = {
    fontWeight: 'bold',
    backgroundColor: '#ff7315',
    color: 'white',
    width: '180px',
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

  const buttonOutline = {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: '#ff7315',
    width: '180px',
    height: '50px',
    marginTop: '1rem',
    border: '1px solid #ff7315',
    borderRadius: '0.3rem',
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out'
  };

  const buttonOutlineHover = {
    ...buttonOutline,
    boxShadow: '3px 3px 2px rgba(0, 0, 0, 0.2)'
  };

  return (
    <>
      <DNavbarAccount />
      <Container className="py-5">
        <div className="mb-5" style={{ height: "fit-content", overflow: "hidden", margin: "auto" }}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <p>
                <span style={{ fontWeight: "700" }}>{dataPemesanan.namaManajemen}</span> |{" "}
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ display: "inline", alignItems: "center", textDecoration: "none" }}>
                  <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
                  <span style={{ color: "#FF7315", fontWeight: "600" }}>Chat</span>
                </a>
              </p>
            </div>
            <p className="p-1" style={{ fontSize: "12px", border: `1px solid ${statusColor}`, color: statusColor }}>{statusText}</p>
          </div>
          <div className="mb-2" style={{ display: "flex", height: "fit-content", overflow: "hidden", margin: "auto", borderBottom: "1px solid black", paddingBottom: "10px" }}>
            <Image src={iconProfileBox} alt="Profile Box" style={{ height: "60px", width: "75px" }} />
            <div className="content" style={{ alignItems: "center" }}>
              <p className="mb-1" style={{ marginLeft: "10px", fontWeight: "700", fontSize: "12px" }}>{dataPemesanan.namaLapangan}</p>
              <p className="mb-0" style={{ marginLeft: "10px", color: "#666666", fontSize: "12px" }}>Waktu : {dataPemesanan.tanggalPemesanan} | {dataPemesanan.jamPemesanan}</p>
              <p className="mb-0" style={{ marginLeft: "10px", color: "#666666", fontSize: "12px" }}>Harga : {dataPemesanan.hargaSewa}</p>
            </div>
          </div>
          <p className="d-flex justify-content-between align-content-center" style={{ fontWeight: "500" }}>Total Harga{" "}<span>{dataPemesanan.totalPembayaran}</span></p>
          <div className="d-flex align-content-end flex-wrap" style={{ flexDirection: "column" }}>
            <Form className="d-flex justify-content-center align-content-end py-1">
              <Button style={isOutlineButtonHovered ? buttonOutlineHover : buttonOutline}
                className="me-4"
                onMouseEnter={() => setOutlineButtonHovered(true)}
                onMouseLeave={() => setOutlineButtonHovered(false)}
              >Beri Ulasan</Button>
              <Button style={isFillButtonHovered ? buttonFillHover : buttonFill}
                onMouseEnter={() => setFillButtonHovered(true)}
                onMouseLeave={() => setFillButtonHovered(false)}
              >Hubungi Pengelola</Button>
            </Form>
          </div>
        </div>
      </Container >
      <Footer />
    </>
  );
}

export default History;