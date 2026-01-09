import React, { useState, useRef, useEffect } from 'react';
import TypeformStep1 from './TypeformStep1';
import Step2Terms from './Step2Terms';
import Step3Calendar from './Step3Calendar';
import { motion } from 'framer-motion';

const LeadFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const hiddenFormRef = useRef(null);
    const sectionRef = useRef(null);

    // Enable distraction-free focus mode when form section is visible
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        document.body.classList.add('form-focus-mode');
                    } else {
                        document.body.classList.remove('form-focus-mode');
                    }
                });
            },
            { threshold: [0, 0.3, 0.5, 0.7, 1] }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
            document.body.classList.remove('form-focus-mode');
        };
    }, []);
    const triggerHubSpotCapture = () => {
        if (hiddenFormRef.current) {
            // Create a custom event and dispatch it if needed, 
            // or just trigger the native submit event.
            // HubSpot script listens for 'submit'
            const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
            hiddenFormRef.current.dispatchEvent(submitEvent);
            console.log('HubSpot capture triggered via hidden form');
        }
    };

    const handleStep1Submit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setStep(2);
    };

    const handleStep2Submit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setStep(3);
    };

    return (
        <section ref={sectionRef} id="step-1" className="lead-flow" style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(ellipse at top, var(--color-bg-light) 0%, var(--color-bg) 100%)',
                zIndex: -1
            }} />

            {/* Hidden form for HubSpot auto-capture (Approach 1) */}
            <form
                ref={hiddenFormRef}
                id="contact-form"
                method="POST"
                action="/api/submit-to-hubspot"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('HubSpot hidden form event captured');
                }}
                style={{ display: 'none' }}
            >
                <input type="text" name="firstname" value={formData.fullName?.split(' ')[0] || ''} readOnly />
                <input type="text" name="lastname" value={formData.fullName?.split(' ').slice(1).join(' ') || ''} readOnly />
                <input type="email" name="email" value={formData.email || ''} readOnly />
                <input type="tel" name="phone" value={formData.phone || ''} readOnly />
                <input type="text" name="city" value={formData.city || ''} readOnly />
                <input type="text" name="company" value={formData.businessType || ''} readOnly />
                <input type="text" name="message" value={formData.investmentRange || ''} readOnly />
                <button type="submit">Submit</button>
            </form>

            {step === 1 && <TypeformStep1 onSubmit={handleStep1Submit} />}

            {step === 2 && (
                <div className="lead-flow-step" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}
                    >
                        <Step2Terms onNext={handleStep2Submit} data={formData} />
                    </motion.div>
                </div>
            )}

            {step === 3 && (
                <div className="lead-flow-step" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}
                    >
                        <Step3Calendar data={formData} onBeforeSubmit={triggerHubSpotCapture} />
                    </motion.div>
                </div>
            )}
            <style>{`
                @media (max-width: 768px) {
                    .lead-flow {
                        min-height: auto !important;
                        padding: 0 !important;
                    }
                    .lead-flow-step {
                        min-height: auto !important;
                        padding: 1.5rem 1rem !important;
                        align-items: flex-start !important;
                        padding-top: 2rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default LeadFlow;
