import React from "react";
import './Footer.css';

const Footer = () => {
    return (
         <div className="footer">
            <div className="sb__footer">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h3>Dibooking</h3>
                        <a href="/lorem">
                            <p>lorem</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Produk Kami</h4>
                        <a href="/promosi">
                            <p>Promosi</p>
                        </a>
                        <a href="/rekomendasi">
                            <p>Rekomendasi Lapangan</p>
                        </a>
                        <a href="/kategori">
                            <p>Kategori Lapangan</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Jelajahi kami</h4>
                        <a href="/tentang">
                            <p>Tentang Kami</p>
                        </a>
                        <a href="/privasi">
                            <p>Privasi</p>
                        </a>
                        <a href="/syarat">
                            <p>Syarat & Ketentuan</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Kontak Kami</h4>
                        <a href="/email">
                            <p>bantuan@dibooking.com</p>
                        </a>
                        <a href="/telp">
                            <p>+62 821-9896-4290</p>
                        </a>
                        <a href="/lokasi">
                            <p>Dibooking, Jakarta Selatan</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sb__footer-below">
                <p>
                    Copyright {new Date().getFullYear()} Seluruh Hak Cipta, Dibooking
                </p>
            </div>
        </div>
    )
}

export default Footer;