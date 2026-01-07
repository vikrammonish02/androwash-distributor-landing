import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

const Step3Calendar = ({ data }) => {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Submit to HubSpot when component mounts
        const submitToHubSpot = async () => {
            if (submitted || submitting) return;

            setSubmitting(true);
            setError(null);

            try {
                const apiUrl = import.meta.env.VITE_API_URL || '/api';
                const response = await fetch(`${apiUrl}/submit-to-hubspot`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Failed to submit form');
                }

                setSubmitted(true);
            } catch (err) {
                console.error('HubSpot submission error:', err);
                setError(err.message);
            } finally {
                setSubmitting(false);
            }
        };

        submitToHubSpot();
    }, [data, submitted, submitting]);
    return (
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-success), #059669)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
                }}
            >
                <CheckCircle size={50} color="white" />
            </motion.div>

            {submitting && (
                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ display: 'inline-block' }}
                    >
                        <Loader2 size={24} />
                    </motion.div>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Submitting your application...</p>
                </div>
            )}

            {error && (
                <div style={{ 
                    background: 'rgba(239, 68, 68, 0.1)', 
                    border: '1px solid #ef4444', 
                    borderRadius: '8px', 
                    padding: '1rem', 
                    marginBottom: '2rem',
                    color: '#ef4444'
                }}>
                    <p>⚠️ {error}</p>
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                        Don't worry! Your information is safe. Please try again or contact us directly.
                    </p>
                </div>
            )}

            {submitted && !error && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <p style={{ color: 'var(--color-success)', fontWeight: '600' }}>
                        ✅ Your application has been submitted successfully!
                    </p>
                </motion.div>
            )}

            <h2 style={{ marginBottom: '1rem' }}>You're Almost There!</h2>
            <p style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                Your application has been received, <strong style={{ color: 'var(--color-primary)' }}>{data?.fullName || 'Partner'}</strong>!<br />
                Book a call with our team to discuss your territory.
            </p>

            <div style={{
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '2rem'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <Calendar size={24} color="var(--color-primary)" />
                    <span style={{ fontWeight: '600', fontSize: '1.125rem' }}>Schedule Your Strategy Call</span>
                </div>

                <div style={{
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '3rem',
                    border: '2px dashed var(--glass-border)',
                    color: 'var(--color-text-muted)'
                }}>
                    <p>Calendly Widget</p>
                    <small>calendly.com/androwash/discovery</small>
                </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                📱 Prefer WhatsApp? <a href="https://wa.me/91XXXXXXXXXX" style={{ color: 'var(--color-success)', fontWeight: '600' }}>Chat with us directly</a>
            </p>
        </div>
    );
};

export default Step3Calendar;
