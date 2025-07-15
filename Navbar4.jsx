import React, { useState } from 'react';
import hLogo from '../../Images/h_logo.svg';
import { CircleUser, UserLock, UserPlus, EllipsisVertical, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='main-navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-style">
                <div className="container-fluid">
                    {/* Left - Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={hLogo} alt="H Logo" height={25} />
                    </Link>

                    {/* Right - Auth Section (Responsive) */}
                    <div className="d-flex align-items-center ms-auto order-lg-3">

                        {/* For md and above: Login & Register buttons */}
                        <div className="d-none d-md-flex align-items-center gap-2 me-2">
                            <Link to="/login" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                                <UserLock size={16} className="me-1" /> Login
                            </Link>
                            <Link to="/register" className="btn btn-primary btn-sm d-flex align-items-center">
                                <UserPlus size={16} className="me-1" /> Register
                            </Link>
                        </div>

                        {/* For small devices: Account Icon with Dropdown */}
                        <div className="dropdown me-2 d-md-none">
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
                                    <Link className="dropdown-item d-flex align-items-center" to="/login">
                                        <UserLock size={16} className="me-2" /> Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/register">
                                        <UserPlus size={16} className="me-2" /> Register
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Navbar Toggler */}
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded={menuOpen}
                            aria-label="Toggle navigation"
                            onClick={handleToggle}
                        >
                            {menuOpen ? <X /> : <EllipsisVertical />}
                        </button>
                    </div>

                    {/* Center - Menu */}
                    <div
                        className={`collapse navbar-collapse justify-content-center order-lg-2 ${menuOpen ? 'show' : ''}`}
                        id="navbarTogglerDemo02"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Call-to-action</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
