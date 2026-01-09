import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Loader2 } from 'lucide-react';

const Step3Calendar = ({ data, onBeforeSubmit }) => {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const hasAttemptedSubmission = useRef(false);

    // HubSpot Configuration - Frontend-Only Integration (No API Key Required)
    const PORTAL_ID = '7869119';
    const FORM_GUID = 'd15bc7c5-ed69-4602-b8fd-a4b6e6bb7e17';
    const HUBSPOT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

    useEffect(() => {
        // Submit to HubSpot when component mounts - only run once
        const submitToHubSpot = async () => {
            // Prevent multiple submissions
            if (hasAttemptedSubmission.current || submitted || submitting) {
                return;
            }

            // Validate that we have required data
            if (!data || !data.email || !data.fullName) {
                console.error('Form data missing:', data);
                setError('Missing required information. Please go back and complete the form.');
                return;
            }

            hasAttemptedSubmission.current = true;
            setSubmitting(true);
            setError(null);

            // Trigger HubSpot capture (legacy approach) if provided
            if (onBeforeSubmit) {
                onBeforeSubmit();
            }

            try {
                console.log('Submitting form data to HubSpot (Frontend API):', data);

                // Parse full name into first/last name
                const nameParts = data.fullName.trim().split(' ');
                const firstName = nameParts[0] || '';
                const lastName = nameParts.slice(1).join(' ') || '';

                // Get HubSpot tracking cookie (if available)
                const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/, "$1");

                // Prepare HubSpot payload with proper field mapping
                const payload = {
                    fields: [
                        { objectTypeId: "0-1", name: "firstname", value: firstName },
                        { objectTypeId: "0-1", name: "lastname", value: lastName },
                        { objectTypeId: "0-1", name: "email", value: data.email },
                        { objectTypeId: "0-1", name: "phone", value: data.phone || "" },
                        { objectTypeId: "0-1", name: "message", value: `City: ${data.city || 'N/A'} | Business Type: ${data.businessType || 'N/A'} | Investment Range: ${data.investmentRange || 'N/A'}` }
                    ],
                    context: {
                        hutk: hutk || undefined,
                        pageUri: window.location.href,
                        pageName: document.title
                    }
                };

                const response = await fetch(HUBSPOT_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('✅ Form submitted successfully to HubSpot!', result);
                    setSubmitted(true);

                    // Auto-redirect to Topmate calendar after 2 seconds
                    setTimeout(() => {
                        window.open('https://topmate.io/subhaghealhtech/1284610', '_blank');
                    }, 2000);
                } else {
                    const errorData = await response.json();
                    console.error('❌ HubSpot form submission failed:', errorData);
                    throw new Error(errorData.message || 'Failed to submit form to HubSpot');
                }
            } catch (err) {
                console.error('HubSpot submission error:', err);
                setError(err.message || 'Failed to submit form. Please try again.');
                hasAttemptedSubmission.current = false; // Allow retry on error
            } finally {
                setSubmitting(false);
            }
        };

        // Only submit if we haven't already submitted and data is available
        if (!hasAttemptedSubmission.current && !submitted && !submitting && data) {
            submitToHubSpot();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array - only run once on mount
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
                    <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                        Don't worry! Your information is safe. Please try again or contact us directly.
                    </p>
                    <motion.button
                        className="btn btn-primary"
                        onClick={async () => {
                            hasAttemptedSubmission.current = false;
                            setError(null);
                            setSubmitting(true);

                            try {
                                console.log('Retrying submission with data:', data);

                                // Parse full name into first/last name
                                const nameParts = data.fullName.trim().split(' ');
                                const firstName = nameParts[0] || '';
                                const lastName = nameParts.slice(1).join(' ') || '';

                                // Get HubSpot tracking cookie (if available)
                                const hutk = document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$)|^.*$/, "$1");

                                // Prepare HubSpot payload with proper field mapping
                                const payload = {
                                    fields: [
                                        { objectTypeId: "0-1", name: "firstname", value: firstName },
                                        { objectTypeId: "0-1", name: "lastname", value: lastName },
                                        { objectTypeId: "0-1", name: "email", value: data.email },
                                        { objectTypeId: "0-1", name: "phone", value: data.phone || "" },
                                        { objectTypeId: "0-1", name: "message", value: `City: ${data.city || 'N/A'} | Business Type: ${data.businessType || 'N/A'} | Investment Range: ${data.investmentRange || 'N/A'}` }
                                    ],
                                    context: {
                                        hutk: hutk || undefined,
                                        pageUri: window.location.href,
                                        pageName: document.title
                                    }
                                };

                                const response = await fetch(HUBSPOT_URL, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(payload)
                                });

                                if (response.ok) {
                                    const result = await response.json();
                                    console.log('✅ Form submitted successfully to HubSpot (retry)!', result);
                                    setSubmitted(true);
                                    hasAttemptedSubmission.current = true;

                                    setTimeout(() => {
                                        window.open('https://topmate.io/subhaghealhtech/1284610', '_blank');
                                    }, 2000);
                                } else {
                                    const errorData = await response.json();
                                    console.error('❌ HubSpot form submission failed (retry):', errorData);
                                    throw new Error(errorData.message || 'Failed to submit form to HubSpot');
                                }
                            } catch (err) {
                                console.error('HubSpot submission error (retry):', err);
                                setError(err.message || 'Failed to submit form. Please try again.');
                                hasAttemptedSubmission.current = false;
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                        disabled={submitting}
                        whileHover={{ scale: submitting ? 1 : 1.02 }}
                        whileTap={{ scale: submitting ? 1 : 0.98 }}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            opacity: submitting ? 0.6 : 1,
                            cursor: submitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {submitting ? 'Retrying...' : 'Retry Submission'}
                    </motion.button>
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
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                        Redirecting you to book your strategy call...
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

                <motion.button
                    className="btn btn-primary"
                    onClick={() => window.open('https://topmate.io/subhaghealhtech/1284610', '_blank')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        width: '100%',
                        padding: '1.25rem 2rem',
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        marginTop: '1rem'
                    }}
                >
                    <Calendar size={20} />
                    Book Your Free Strategy Call
                </motion.button>

                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    marginTop: '1rem',
                    lineHeight: '1.6'
                }}>
                    <strong>What to expect:</strong> A quick 15–20 minute conversation where we'll walk you through how Androwash is helping distributors rapidly grow their business.
                </p>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                📱 Prefer WhatsApp? <a href="https://wa.me/919036490490" style={{ color: 'var(--color-success)', fontWeight: '600' }}>Chat with us directly</a>
            </p>
            <style>{`
                @media (max-width: 768px) {
                    .glass-card {
                        padding: 2rem 1.5rem !important;
                    }
                    .glass-card h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                    .glass-card p {
                        font-size: 1rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .glass-card > div:first-child {
                        width: 80px !important;
                        height: 80px !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .glass-card > div:first-child svg {
                        width: 40px !important;
                        height: 40px !important;
                    }
                    .glass-card > div:nth-child(2) {
                        padding: 1.5rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .glass-card > div:nth-child(2) > div {
                        padding: 2rem 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Step3Calendar;
