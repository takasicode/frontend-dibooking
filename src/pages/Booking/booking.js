/* eslint-disable array-callback-return */
import React from "react";
import { Container, Image } from "react-bootstrap";
import { BiMessageDetail } from "react-icons/bi";
import iconProfileBox from "../../assets/icons/ic_profile_box.png";
import DNavbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Booking() {
  const [Pemesanan, setPemesanan] = useState([]);
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      window.location.href = "/login";
    }
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/api/pemesanan/pesanans",
        {
          headers: {
            Authorization: `${loggedIn}`,
          },
        }
      );
      response.data = response.data.filter((data) => data.status !== 'Selesai' || data.status !== 'Dibatalkan');
      setPemesanan(response.data);
    }
    fetchData();
  }, []);

  const dataPesanan = [];
  Pemesanan.map((dataPemesanan1) => {
    let statusColor;
    let statusText;
  
    switch (dataPemesanan1.status) {
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
    const dataPemesanan = {
      namaManajemen: dataPemesanan1.manager,
      namaLapangan: dataPemesanan1.title,
      statusPemesanan: dataPemesanan1.status,
      tanggalPemesanan: dataPemesanan1.tanggal,
      jamPemesanan: dataPemesanan1.jam,
      hargaSewa: dataPemesanan1.price,
      nomor_ponsel: `https://wa.me/${dataPemesanan1.nomor_ponsel}`,
      totalPembayaran: dataPemesanan1.total,
      statusColor: statusColor,
      statusText: statusText,
    };
    dataPesanan.push(dataPemesanan);
  });


  return (
    <>
      <DNavbar />
      <Container className="py-5">
      {dataPesanan.map((dataPemesanan, index) => (
        <div key={index} className="mb-5" style={{ height: "fit-content", overflow: "hidden", margin: "auto" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <p>
                  <span style={{ fontWeight: "700" }}>{dataPemesanan.namaManajemen}</span> |{" "}
                  <a href={dataPemesanan.nomor_ponsel} target="_blank" rel="noopener noreferrer" style={{ display: "inline", alignItems: "center", textDecoration: "none" }}>
                    <BiMessageDetail style={{ color: "#FF7315" }} />{" "}
                    <span style={{ color: "#FF7315", fontWeight: "600" }}>Chat</span>
                  </a>
                </p>
              </div>
              <p className="p-1" style={{ fontSize: "12px", border: `1px solid ${dataPemesanan.statusColor}`, color: dataPemesanan.statusColor }}>{dataPemesanan.statusText}</p>
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
        </div>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default Booking;
