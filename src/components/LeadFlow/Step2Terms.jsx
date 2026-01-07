import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const Step2Terms = ({ onNext, data }) => {
    const [expandedSection, setExpandedSection] = useState(null);
    const [agreed, setAgreed] = useState({
        terms: false,
        privacy: false,
        marketing: false
    });

    const sections = [
        { id: 'territory', title: 'Territory Rights', content: 'You will receive exclusive rights to market and sell AndroWash products within your designated territory...' },
        { id: 'pricing', title: 'Pricing & Margins', content: 'Standard dealer margins are 20-25% on device sales and 35-40% on consumables...' },
        { id: 'support', title: 'Training & Support', content: 'You will receive comprehensive product training, marketing materials, and ongoing technical support...' },
        { id: 'payment', title: 'Payment Terms', content: 'Initial stock must be paid in advance. Subsequent orders may qualify for credit terms based on performance...' },
        { id: 'termination', title: 'Termination Policy', content: 'Either party may terminate with 90 days written notice. Territory rights revert upon termination...' }
    ];

    const allAgreed = agreed.terms && agreed.privacy;

    return (
        <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Partnership Terms</h2>
            <p style={{ marginBottom: '2rem' }}>Please review and accept the following terms to proceed.</p>

            <div style={{ marginBottom: '2rem' }}>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        style={{
                            borderBottom: '1px solid var(--glass-border)',
                            padding: '1rem 0'
                        }}
                    >
                        <button
                            onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-text)',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                padding: '0.5rem 0'
                            }}
                        >
                            {section.title}
                            {expandedSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {expandedSection === section.id && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                style={{ padding: '1rem 0', color: 'var(--color-text-muted)' }}
                            >
                                {section.content}
                            </motion.p>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={agreed.terms}
                        onChange={(e) => setAgreed({ ...agreed, terms: e.target.checked })}
                        style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                    />
                    <span>I agree to the Terms & Conditions*</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={agreed.privacy}
                        onChange={(e) => setAgreed({ ...agreed, privacy: e.target.checked })}
                        style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                    />
                    <span>I agree to the Privacy Policy*</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={agreed.marketing}
                        onChange={(e) => setAgreed({ ...agreed, marketing: e.target.checked })}
                        style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }}
                    />
                    <span>I agree to receive marketing communications</span>
                </label>
            </div>

            <motion.button
                className="btn btn-primary"
                disabled={!allAgreed}
                onClick={() => onNext({ 
                    agreedToTerms: true,
                    marketing: agreed.marketing 
                })}
                whileHover={{ scale: allAgreed ? 1.02 : 1 }}
                whileTap={{ scale: allAgreed ? 0.98 : 1 }}
                style={{
                    width: '100%',
                    opacity: allAgreed ? 1 : 0.5,
                    cursor: allAgreed ? 'pointer' : 'not-allowed'
                }}
            >
                Continue to Book Meeting <Check size={20} />
            </motion.button>
            <style>{`
                @media (max-width: 768px) {
                    .glass-card {
                        padding: 1.5rem !important;
                    }
                    .glass-card h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    .glass-card p {
                        font-size: 1rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .glass-card button {
                        font-size: 1rem !important;
                        padding: 0.75rem 0 !important;
                    }
                    .glass-card label {
                        font-size: 0.95rem !important;
                    }
                    .glass-card .btn {
                        padding: 0.875rem 1rem !important;
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Step2Terms;
