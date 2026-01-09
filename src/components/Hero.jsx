import React, { useState } from 'react';
import { MessageCircle, ArrowRight, Play, Star, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useConfig from '../hooks/useConfig';

const Hero = () => {
    const { config, loading } = useConfig();
    const [isPlaying, setIsPlaying] = useState(false);

    const youtubeUrl = config?.vsl?.youtubeUrl || "https://www.youtube.com/embed/G7kL6Zrr79U";

    return (
        <section className="hero section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            {/* Background Gradient Effects with Motion */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: ['-50%', '-45%', '-50%'],
                    opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1 }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ position: 'absolute', bottom: '-200px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-secondary-glow) 0%, transparent 70%)', borderRadius: '50%', zIndex: -1 }}
            />

            <div className="container">
                {/* Urgency Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                    <span className="urgency-badge">
                        <Clock size={16} /> Limited Time: Only 3 Territories Left!
                    </span>
                </motion.div>

                {/* Main Headline - ClickFunnels Style: BIG & Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
                >
                    <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                        <span style={{
                            fontSize: '0.875rem',
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.4em',
                            fontWeight: '700',
                            display: 'block',
                            marginBottom: '1rem',
                            opacity: 1
                        }}>AndroWash Distribution</span>
                        Build a <span className="text-highlight">₹1-2 Lakh/Month</span>
                        <br />Medical Distribution Business
                    </h1>

                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--color-text-muted)' }}>
                        Partner with India's #1 Fertility Tech Company backed by
                        <strong style={{ color: 'var(--color-text)' }}> Shark Tank</strong> and
                        <strong style={{ color: 'var(--color-text)' }}> Tata Trusts</strong>
                    </p>

                    {/* Trust Logos - Using styled text badges as fallback */}
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #1428A0, #0D1A60)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '1rem',
                            letterSpacing: '0.05em'
                        }}>
                            SONY TV
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #00568C, #003D66)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            🦈 Shark Tank India
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #486AAE, #2E4A7D)',
                            padding: '0.5rem 1.25rem',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '1rem',
                            letterSpacing: '0.05em'
                        }}>
                            TATA Trusts
                        </div>
                    </div>

                    {/* Giant CTA Button - ClickFunnels Signature */}
                    <motion.button
                        className="btn btn-secondary btn-giant"
                        onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--color-secondary-glow)' }}
                        whileTap={{ scale: 0.98 }}
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        <span style={{ position: 'relative', zIndex: 1 }}>YES! I Want To Apply Now</span>
                        <ArrowRight size={24} style={{ position: 'relative', zIndex: 1 }} />
                        {/* Shimmer Effect */}
                        <motion.div
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '50%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                transform: 'skewX(-20deg)',
                                zIndex: 0
                            }}
                        />
                    </motion.button>

                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
                        ✓ No commitment required &nbsp;&nbsp; ✓ Free strategy call included &nbsp;&nbsp; ✓ Same-day response
                    </p>
                </motion.div>

                {/* Video Section - ClickFunnels Style */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ maxWidth: '800px', margin: '4rem auto 0' }}
                >
                    <div
                        className="glass-card"
                        style={{
                            position: 'relative',
                            aspectRatio: '16/9',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            border: '2px solid var(--color-primary)',
                            background: '#000'
                        }}
                        onClick={() => !isPlaying && setIsPlaying(true)}
                    >
                        {!isPlaying ? (
                            <>
                                {/* Video Thumbnail/Placeholder */}
                                <img
                                    src="https://androwash.in/wp-content/uploads/2023/06/AndroWash-Landing-Page-Mockup.png"
                                    alt="AndroWash Demo"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                                />

                                {/* Play Button Overlay */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    style={{
                                        position: 'absolute',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        background: 'var(--color-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 40px var(--color-secondary-glow)'
                                    }}
                                >
                                    <Play size={40} fill="white" color="white" style={{ marginLeft: '5px' }} />
                                </motion.div>

                                <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.8)', padding: '0.75rem 1.5rem', borderRadius: '50px', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                                    🎬 Watch: How Our Partners Earn ₹1L+ Monthly
                                </div>
                            </>
                        ) : (
                            <iframe
                                src={`${youtubeUrl}${youtubeUrl.includes('?') ? '&' : '?'}autoplay=1`}
                                title="AndroWash Demo"
                                style={{ width: '100%', height: '100%', border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </motion.div>


                {/* Trust Indicators */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                    <div className="trust-badge">
                        <Shield size={20} color="var(--color-success)" />
                        <span>CDSCO Certified</span>
                    </div>
                    <div className="trust-badge">
                        <Star size={20} color="var(--color-yellow)" />
                        <span>35+ Active Partners</span>
                    </div>
                    <div className="trust-badge">
                        <Shield size={20} color="var(--color-primary)" />
                        <span>ISO Registered</span>
                    </div>
                </div>

                {/* As Featured On Section */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '2rem', fontWeight: 600 }}>
                        As Featured On
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        flexWrap: 'wrap',
                        transition: 'var(--transition-smooth)'
                    }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Economic_Times_logo.svg" alt="The Economic Times" style={{ height: '25px', width: 'auto', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_times_of_india.svg" alt="The Times of India" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }} />
                        <img src="https://images.yourstory.com/cs/images/homepage/headerV3_YS.svg" alt="YourStory" style={{ height: '30px', width: 'auto', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Shark_Tank_India.png" alt="Shark Tank India" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Ani-logo.png" alt="ANI News" style={{ height: '35px', width: 'auto', filter: 'brightness(0) invert(1) opacity(0.8)', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }} />
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero { 
                        min-height: auto !important; 
                        padding: 2rem 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .urgency-badge { 
                        font-size: 0.75rem !important;
                        padding: 0.5rem 0.875rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .hero h1 {
                        margin-bottom: 1rem !important;
                    }
                    .hero p {
                        font-size: 1rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .hero .btn-giant {
                        margin-bottom: 1rem !important;
                    }
                    .hero > div > div {
                        margin-top: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
