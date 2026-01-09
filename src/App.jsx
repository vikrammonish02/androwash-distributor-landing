import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import ExitIntentPopup from './components/ExitIntentPopup';
import FormNudge from './components/FormNudge';
import LeadFlow from './components/LeadFlow/LeadFlow';
import AdminPanel from './components/Admin/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const LandingPage = () => {
    // Ensure page always starts at the top on load
    useEffect(() => {
        // Scroll to top immediately when component mounts
        window.scrollTo(0, 0);

        // Prevent browser scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Handle hash navigation
        const handleHashChange = () => {
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <FeatureVideo />
                <MarketOpportunity />
                <VSL />
                <ImpactTrust />
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

            <Footer />

            <ExitIntentPopup />

            {/* Mobile Bottom Nav */}
            <div className="bottom-nav">
                <a href="https://wa.me/919036490490" className="btn" style={{ flex: 1, justifyContent: 'center', borderRadius: '12px', background: '#25D366', color: 'white', border: 'none' }}>
                    WhatsApp
                </a>
                <button className="btn btn-primary" style={{ flex: 1, padding: '0.75rem' }} onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
                    Apply Now
                </button>
            </div>

            {/* Floating WhatsApp for Desktop */}
            <a
                href="https://wa.me/919036490490"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float desktop-only"
            >
                <MessageCircle size={32} color="white" />
            </a>
            <style>{`
                @media (min-width: 769px) {
                    .bottom-nav { display: none !important; }
                }
                @media (max-width: 768px) {
                    .desktop-only { display: none !important; }
                }
            `}</style>
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

