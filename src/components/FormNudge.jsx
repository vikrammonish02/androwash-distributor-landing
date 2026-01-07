import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';

const FormNudge = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            style={{
                margin: '4rem auto',
                maxWidth: '900px',
                padding: '3rem 2rem',
                textAlign: 'center',
                background: 'linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-light) 100%)',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--color-secondary)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated Corner Accent */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, var(--color-secondary-glow) 0%, transparent 70%)',
                borderRadius: '0 0 0 100%'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Urgency Badge */}
                <span className="urgency-badge" style={{ marginBottom: '1.5rem' }}>
                    <Clock size={16} /> Only 3 Spots Left This Week!
                </span>

                <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', marginTop: '1.5rem' }}>
                    Ready to Start Your <span className="text-highlight">High-Profit</span> Business?
                </h2>

                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Join 35+ successful partners already earning recurring income with AndroWash
                </p>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <TrendingUp size={20} color="var(--color-success)" />
                        <span style={{ color: 'var(--color-text-muted)' }}>₹1-2L/Month Income</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Zap size={20} color="var(--color-secondary)" />
                        <span style={{ color: 'var(--color-text-muted)' }}>2-Min Application</span>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary btn-giant"
                    style={{ margin: '0 auto' }}
                    onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    APPLY FOR EXCLUSIVE TERRITORY <ArrowRight size={24} />
                </motion.button>

                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    ✓ No credit card required &nbsp;&nbsp; ✓ Free consultation included
                </p>
            </div>
        </motion.div>
    );
};

export default FormNudge;
