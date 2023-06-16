import React, { useState } from "react";
import MyVerticallyCenteredModal from "../../components/DashboardPengelola/ModalDetail/modalDetail";
import { data } from "../../data/dataKelola";
import ModalTambahLap from "../../components/DashboardPengelola/ModalTambahLapangan/modalTambahLap";
import "../../pages/DashboardPengelola/dashboard.css"
import Navbar from "../../components/DashboardPengelola/navbar";
import Sidebar from "../../components/DashboardPengelola/sidebar";
import Footer from "../../components/DashboardPengelola/footer";

function Kelola() {
  const [modalShow, setModalShow] = useState(false);
  const [modalLap, setModalLap] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div id='wrapper'>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              id={id}
              title={"Detail Lapangan"}
            />
            <ModalTambahLap
              show={modalLap}
              onHide={() => setModalLap(false)}
              title={"Tambah Lapangan"}
            />
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Kelola Lapangan</h1>
                <button
                  onClick={() => {
                    setModalLap(true)
                  }}
                  className="d-sm-inline-block btn btn-md btn-outline-dark shadow-sm"
                >
                  <i className="fas fa-plus"></i> Tambah Lapangan
                </button>
              </div>

              <table className="table table-striped text-center">
                <thead>
                  <tr className="dibooking-orange text-white">
                    <th scope="col">No.</th>
                    <th scope="col">Nama Lapangan</th>
                    <th scope="col">Kategori Lapangan</th>
                    <th scope="col">Lokasi</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr className="text-dark" key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.nama}</td>
                      <td>{item.kategori}</td>
                      <td>{item.kategori}</td>
                      <td>{item.harga}</td>
                      <td>
                        <button
                          className="btn btn-sm text-white button-detail"
                          onClick={() => {
                            setModalShow(true);
                            setId(item.id);
                          }}
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Kelola;
