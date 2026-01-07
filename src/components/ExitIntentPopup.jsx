import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        const timer = setTimeout(() => {
            if (!hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        }, 15000); // Trigger after 15 seconds on mobile/no-exit

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasTriggered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', pointerEvents: 'auto' }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass-card"
                        style={{
                            width: '90%',
                            maxWidth: '500px',
                            padding: '2.5rem',
                            pointerEvents: 'auto',
                            position: 'relative',
                            border: '1px solid var(--color-primary)',
                            background: 'rgba(30, 41, 59, 0.95)'
                        }}
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center">
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'var(--color-secondary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Wait! Don't Miss Out
                            </h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--color-text)' }}>
                                See how much you can earn in 2025. Download our <strong>Exclusive Revenue Projection Sheet</strong> before you go.
                            </p>

                            <ul style={{ textAlign: 'left', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    <Check size={18} color="var(--color-success)" /> Detailed Margin Breakdown
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                    <Check size={18} color="var(--color-success)" /> ROI Calculator
                                </li>
                            </ul>

                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setIsVisible(false)}>
                                Download Now (Free)
                            </button>
                            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                No commitment required.
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;
