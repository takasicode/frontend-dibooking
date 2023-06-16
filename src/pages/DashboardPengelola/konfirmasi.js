import React from 'react';
import { pesan } from '../../data/dataPemesanan';
import "../../pages/DashboardPengelola/dashboard.css"
import Sidebar from '../../components/DashboardPengelola/sidebar';
import Navbar from '../../components/DashboardPengelola/navbar';
import Footer from '../../components/DashboardPengelola/footer';

function Konfirmasi() {
    return (
        <div id='wrapper'>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                        {/* <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Konfirmasi Pemesanan</h1>
                        </div>

                        <table className="table table-striped text-center">
                            <thead>
                                <tr className="dibooking-orange text-white">
                                    <th scope="col">No.</th>
                                    <th scope="col">Nama Lapangan</th>
                                    <th scope="col">Penyewa</th>
                                    <th scope="col">Lokasi</th>
                                    <th scope="col">Waktu</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pesan.map((item, index) => (
                                    <tr className="text-dark" key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.nama}</td>
                                        <td>{item.penyewa}</td>
                                        <td>{item.lokasi}</td>
                                        <td>{item.waktu}</td>
                                        <td>
                                            <button className="btn btn-sm text-white button-terima">Terima</button> | <button className="btn btn-sm text-white button-tolak">Tolak</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
                <Footer />
            </div>
        </div>)
}

export default Konfirmasi
