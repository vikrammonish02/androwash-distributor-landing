import React from 'react';
import { motion } from 'framer-motion';

const FeatureVideo = () => {
    return (
        <section className="feature-video section-padding" style={{ background: '#0B1120', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>The Future of Fertility Tech</h2>
                    <p style={{ color: '#8B9CC7', maxWidth: '800px', margin: '0 auto' }}>
                        Experience the precision of AndroWash. Our automated sperm washing technology
                        eliminates human error and ensures 100% consistency in clinical outcomes.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <video
                        src="https://lh3.googleusercontent.com/gg/AIJ2gl_roJpZ65Wfj2DtplUcHU20jfpnICyAOcYjQ4F6SzO9ORVb38M8BOYIvMY1LC96qulUV-RRw_Ms5wnfBOQOdDOAQT8d0NzCxbz78ss9lZqEOxlpvjgvnM1aRdlwO2hXFuO21HIUaz8ARSvBiNBLhXa_cnzIoIlpRwjQdp0wVW2817Q0g9Nw=mm,22,18"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: '100%', display: 'block' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '2rem',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                        color: 'white'
                    }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>
                            Device Insight
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                            Advanced Automated Sperm Washing System
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureVideo;
