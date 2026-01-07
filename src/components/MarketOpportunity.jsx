import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MarketOpportunity = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const data = [
        { title: "1 in 6 Couples", desc: "Face infertility in India, creating a massive patient base for clinics." },
        { title: "27M Couples", desc: "Are actively seeking fertility treatments across India right now." },
        { title: "Clinical Bottleneck", desc: "Shortage of specialized andrologists leads to manual errors and delays." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="market-opportunity section-padding" style={{ position: 'relative' }} ref={ref}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                    style={{ marginBottom: '3rem' }}
                >
                    The Massive Market Opportunity in India
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                    className="market-cards"
                >
                    {data.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card"
                            style={{ padding: '2rem', borderLeft: '4px solid var(--color-primary)', cursor: 'pointer' }}
                        >
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '2rem' }}>{item.title}</h3>
                            <p style={{ color: 'white' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="glass-card"
                    style={{ marginTop: '4rem', padding: '3rem', background: 'rgba(30, 41, 59, 0.6)', textAlign: 'center', border: '1px solid var(--color-primary)' }}
                    className="solution-card"
                >
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>The AndroWash Solution</h3>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
                        Our automated, patent-pending technology enables any gynecologist or IVF center to perform high-quality sperm washing without needing a full-time specialist.
                        <br /><br />
                        <strong style={{ color: '#00E676' }}>It's WHO-compliant, 100% automated, and builds consistent monthly recurring revenue for you.</strong>
                    </p>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .market-opportunity {
                        padding: 2rem 0 !important;
                    }
                    .market-cards {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .market-cards .glass-card {
                        padding: 1.5rem !important;
                        margin-bottom: 0 !important;
                    }
                    .solution-card {
                        margin-top: 2rem !important;
                        padding: 2rem 1.5rem !important;
                    }
                    .solution-card h3 {
                        font-size: 1.25rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .solution-card p {
                        font-size: 1rem !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default MarketOpportunity;
