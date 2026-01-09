import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">Subhag HealthTech</div>
                        <p className="footer-tagline">Building India's most advanced automated fertility solutions.</p>
                    </div>
                    <div>
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="https://subhag.in" target="_blank" rel="noopener noreferrer">Main Website</a></li>
                            <li><a href="#">Partner Portal</a></li>
                            <li><a href="#">Clinical Research</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer-heading">Legal</h4>
                        <ul className="footer-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} Subhag HealthTech Pvt Ltd. All rights reserved. CDSCO Registration No: 12345/M/2026.
                    <div className="footer-admin-link">
                        <Link to="/admin">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
