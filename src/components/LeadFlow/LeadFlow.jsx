import React, { useState } from 'react';
import TypeformStep1 from './TypeformStep1';
import Step2Terms from './Step2Terms';
import Step3Calendar from './Step3Calendar';
import { motion } from 'framer-motion';

const LeadFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleStep1Submit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setStep(2);
    };

    const handleStep2Submit = (data) => {
        setFormData(prev => ({ ...prev, ...data }));
        setStep(3);
    };

    return (
        <section id="step-1" className="lead-flow" style={{ minHeight: '100vh', position: 'relative' }}>
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

            {step === 1 && <TypeformStep1 onSubmit={handleStep1Submit} />}

            {step === 2 && (
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '2rem' }}>
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
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}
                    >
                        <Step3Calendar data={formData} />
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default LeadFlow;
