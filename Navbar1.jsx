import React from 'react';
import hLogo from '../../Images/h_logo.svg';

const Navbar = () => {
    return (
        <div className='main-navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center justify-content-center mx-auto" href="#">
                        <img
                            src={hLogo}
                            alt="H Logo"
                            height={25}
                        />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Call-to-action</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
