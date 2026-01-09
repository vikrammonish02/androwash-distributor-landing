import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="container nav-container">
                <div
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                >
                    <img src="https://subhag.in/wp-content/uploads/2019/02/cropped-forajendra_23_01_19_website_logo-1.png" alt="Subhag Logo" className="logo-img" />
                    <div className="logo-text">
                        <span className="brand-name">ANDROWASH</span>
                        <span className="brand-divider"></span>
                        <span className="brand-tagline">Distribution</span>
                    </div>
                </div>
                <button className="btn btn-primary nav-apply-btn" onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
