import React from 'react';
import hLogo from '../../Images/h_logo.svg';
import { CircleUser, UserLock, UserPlus } from 'lucide-react'; // lucide icons

const Navbar = () => {
    return (
        <div className='main-navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-style">
                <div className="container-fluid">
                    {/* Logo on Left */}
                    <a className="navbar-brand" href="/">
                        <img
                            src={hLogo}
                            alt="H Logo"
                            height={25}
                        />
                    </a>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                        {/* Centered Links */}
                        <ul className="navbar-nav mb-2 mb-lg-0">
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

                    {/* Account Dropdown */}
                    <div className="d-flex align-items-center ms-auto">
                        <div className="dropdown me-2">
                            <span
                                role="button"
                                id="accountDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                className="d-flex align-items-center text-primary"
                                style={{ cursor: 'pointer' }}
                            >
                                <CircleUser size={24} />
                            </span>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="/login">
                                        <UserLock size={16} className="me-2" />
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="/register">
                                        <UserPlus size={16} className="me-2" />
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Toggler on Right */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
