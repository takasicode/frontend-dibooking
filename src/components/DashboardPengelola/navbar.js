import { useState } from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';

function Navbar() {
    const [style, setStyle] = useState("navbar-nav dibooking-orange sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav dibooking-orange sidebar sidebar-dark accordion") {
            setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion toggled");
        } else {
            setStyle("navbar-nav dibooking-orange sidebar sidebar-dark accordion");
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle}>
                    <i className="fa fa-bars icon-color"></i>
                </button>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Rizki Dwi Yulianto</span>
                            <Image className="img-profile rounded-circle"
                                src="img/undraw_profile.svg" />
                        </Link>
                        {/* <!-- Dropdown - User Information --> */}
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <Link className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </Link>
                        </div>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar
