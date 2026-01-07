import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

const Step3Calendar = ({ data }) => {
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
