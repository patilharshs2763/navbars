import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { UserLock, UserPlus, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const closeServices = () => {
        setIsServicesOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setIsServicesOpen(false);
        }
    };

    // const isServiceActive = windows.location.path;
    const currentPath = location.pathname;
    const service_paths = ['/skin-treatments', '/hair-treatments'];
    const isServiceActive = service_paths.some(path => currentPath.startsWith(path));



    return (
        <nav className="navbar">
            {/* Logo on the left */}
            <div className="navbar-logo">
                <Link to="/">Harsh</Link>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Navigation links in center */}
            <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Home
                </NavLink>

                <div
                    className={`nav-link dropdown  ${isServicesOpen ? 'open' : ''} ${isServiceActive ? 'service-tab-active' : ''}`}
                    onMouseEnter={() => !isMobileMenuOpen && setIsServicesOpen(true)}
                    onMouseLeave={() => !isMobileMenuOpen && setIsServicesOpen(false)}
                >
                    <span onClick={toggleServices}>
                        Services <ChevronDown size={16} className={`chevron ${isServicesOpen ? 'rotate' : ''}`} />
                    </span>
                    <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                        <NavLink
                            to="/skin-treatments"
                            className="dropdown-item"
                            activeClassName="active-dropdown"
                            onClick={() => {
                                closeServices();
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Skin Treatments
                        </NavLink>
                        <NavLink
                            to="/hair-treatments"
                            className="dropdown-item"
                            activeClassName="active-dropdown"
                            onClick={() => {
                                closeServices();
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Hair Treatments
                        </NavLink>
                    </div>
                </div>

                <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    About
                </NavLink>

                <NavLink
                    to="/blog"
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Blog
                </NavLink>

                <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Contact
                </NavLink>

                {/* Mobile auth buttons */}
                <div className="mobile-auth">
                    <Link
                        to="/login"
                        className="auth-link mobile-auth-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <UserLock size={16} className="me-1" /> Login
                    </Link>
                    <Link
                        to="/register"
                        className="auth-link register mobile-auth-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <UserPlus size={16} className="me-1" /> Register
                    </Link>
                </div>
            </div>

            {/* Desktop auth buttons */}
            <div className="navbar-auth">
                <Link to="/login" className="auth-link">
                    <UserLock size={16} className="me-1" /> Login
                </Link>
                <Link to="/register" className="auth-link register">
                    <UserPlus size={16} className="me-1" /> Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
