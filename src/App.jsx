import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import FeatureVideo from './components/FeatureVideo';
import MarketOpportunity from './components/MarketOpportunity';
import VSL from './components/VSL';
import ImpactTrust from './components/ImpactTrust';
import ProfitEngine from './components/ProfitEngine';
import PartnershipPackages from './components/PartnershipPackages';
import Timeline from './components/Timeline';
import SupportSystem from './components/SupportSystem';
import PartnerProfile from './components/PartnerProfile';
import Testimonials from './components/Testimonials';
import ChannelProtection from './components/ChannelProtection';
import Step3Calendar from './components/LeadFlow/Step3Calendar';
import ExitIntentPopup from './components/ExitIntentPopup';
import FormNudge from './components/FormNudge';
import LeadFlow from './components/LeadFlow/LeadFlow';
import AdminPanel from './components/Admin/AdminPanel';

const LandingPage = () => {
    // Ensure page always starts at the top on load
    useEffect(() => {
        // Scroll to top immediately when component mounts
        window.scrollTo(0, 0);
        
        // Prevent browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        
        // Handle hash navigation - scroll to top if no hash, or wait for content to load
        const handleHashChange = () => {
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }
        };
        
        window.addEventListener('hashchange', handleHashChange);
        
        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    return (
        <>
            <nav className="main-nav" style={{ padding: '1.5rem 0', background: 'white', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--color-gray-100)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="logo" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.4rem',
                        letterSpacing: '-0.02em',
                        cursor: 'pointer'
                    }} onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }}>
                        <img src="https://subhag.in/wp-content/uploads/2019/02/cropped-forajendra_23_01_19_website_logo-1.png" alt="Subhag Logo" style={{ height: '36px', width: 'auto' }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: '800', color: '#0B1120' }}>ANDROWASH</span>
                            <span style={{ width: '1px', height: '20px', background: '#E2E8F0' }}></span>
                            <span style={{
                                fontWeight: '500',
                                fontSize: '0.75rem',
                                color: 'var(--color-primary)',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                opacity: 0.9
                            }}>Distribution</span>
                        </div>
                    </div>
                    <button className="btn btn-primary nav-apply-btn" onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
                        Apply Now
                    </button>
                </div>
            </nav>

            <main>
                <Hero />
                <FeatureVideo />
                <MarketOpportunity />
                <VSL />
                <ImpactTrust />
                <FormNudge />
                <ProfitEngine />
                <FormNudge />
                <PartnershipPackages />
                <Timeline />
                <SupportSystem />
                <PartnerProfile />
                <Testimonials />
                <ChannelProtection />
                <LeadFlow />
            </main>


            <footer className="main-footer" style={{ background: 'var(--color-gray-800)', color: 'white', padding: '4rem 0', marginTop: 0 }}>
                <div className="container" style={{ position: 'relative' }}>
                    <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Subhag HealthTech</div>
                            <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>Building India's most advanced automated fertility solutions.</p>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Main Website</li>
                                <li style={{ marginBottom: '0.5rem' }}>Partner Portal</li>
                                <li>Clinical Research</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1.5rem' }}>Legal</h4>
                            <ul style={{ listStyle: 'none', opacity: 0.7, fontSize: '0.875rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.75rem' }}>
                        © 2026 Subhag HealthTech Pvt Ltd. All rights reserved. CDSCO Registration No: 12345/M/2026.
                        <div style={{ marginTop: '1rem' }}>
                            <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.3 }}>Admin</Link>
                        </div>
                    </div>
                </div>
            </footer>

            <ExitIntentPopup />

            <div className="bottom-nav" style={{ display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', padding: '1rem', boxShadow: '0 -2px 10px rgba(0,0,0,0.1)', zIndex: 1000, gap: '1rem' }}>
                <a href="https://wa.me/919036490490" className="btn" style={{ flex: 1, justifyContent: 'center', borderRadius: '12px', background: '#25D366', color: 'white', border: 'none' }}>
                    WhatsApp
                </a>
                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }} onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                </button>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .main-nav {
                        padding: 1rem 0 !important;
                    }
                    .logo {
                        font-size: 1.1rem !important;
                    }
                    .logo img {
                        height: 28px !important;
                    }
                    .logo span:first-of-type {
                        font-size: 0.9rem !important;
                    }
                    .logo span:last-of-type {
                        font-size: 0.65rem !important;
                    }
                    .nav-apply-btn {
                        padding: 0.5rem 1rem !important;
                        font-size: 0.875rem !important;
                    }
                    .main-footer {
                        padding: 2.5rem 0 !important;
                    }
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        margin-bottom: 2rem !important;
                    }
                    main > section {
                        margin-bottom: 0 !important;
                        padding-bottom: 2.5rem !important;
                    }
                    main > section:last-child {
                        padding-bottom: 0 !important;
                    }
                    .bottom-nav { 
                        display: flex !important; 
                    }
                    .whatsapp-float { 
                        bottom: 6rem; 
                    }
                }
            `}</style>

            <a
                href="https://wa.me/919036490490"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    background: '#25D366',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(37,211,102,0.3)',
                    zIndex: 1000,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                }}
                className="whatsapp-float"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <MessageCircle size={32} color="white" />
            </a>
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

