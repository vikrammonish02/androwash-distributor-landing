import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, User, Briefcase, MapPin, Phone, Mail, Building, DollarSign } from 'lucide-react';

const TypeformStep1 = ({ onSubmit }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        businessType: '',
        investmentRange: ''
    });
    const inputRef = useRef(null);

    const steps = [
        {
            key: 'fullName',
            icon: User,
            question: "What's your full name?",
            placeholder: "Type your name...",
            type: 'text'
        },
        {
            key: 'email',
            icon: Mail,
            question: "What's your email address?",
            placeholder: "you@example.com",
            type: 'email'
        },
        {
            key: 'phone',
            icon: Phone,
            question: "What's your phone number?",
            placeholder: "+91 98765 43210",
            type: 'tel'
        },
        {
            key: 'city',
            icon: MapPin,
            question: "Which city are you based in?",
            placeholder: "e.g., Mumbai, Delhi, Bangalore",
            type: 'text'
        },
        {
            key: 'businessType',
            icon: Building,
            question: "What's your current business?",
            placeholder: "",
            type: 'select',
            options: [
                { value: '', label: 'Select your business type...' },
                { value: 'medical_distributor', label: 'Medical Device Distributor' },
                { value: 'pharma', label: 'Pharmaceutical Business' },
                { value: 'healthcare', label: 'Healthcare Professional' },
                { value: 'investor', label: 'Investor/Entrepreneur' },
                { value: 'other', label: 'Other Business' }
            ]
        },
        {
            key: 'investmentRange',
            icon: DollarSign,
            question: "What's your investment capacity?",
            placeholder: "",
            type: 'select',
            options: [
                { value: '', label: 'Select investment range...' },
                { value: '5-10L', label: '₹5-10 Lakhs' },
                { value: '10-25L', label: '₹10-25 Lakhs' },
                { value: '25-50L', label: '₹25-50 Lakhs' },
                { value: '50L+', label: '₹50 Lakhs+' }
            ]
        }
    ];

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentStep]);

    const handleNext = () => {
        const currentField = steps[currentStep].key;
        if (!formData[currentField]) return;

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onSubmit(formData);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleNext();
        }
    };

    const handleChange = (value) => {
        setFormData({ ...formData, [steps[currentStep].key]: value });
    };

    const currentStepData = steps[currentStep];
    const Icon = currentStepData.icon;
    const progress = ((currentStep + 1) / steps.length) * 100;

    return (
        <div className="typeform-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
            {/* Progress Bar */}
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: 'var(--glass-border)', zIndex: 1000 }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
                />
            </div>

            {/* Step Counter */}
            <div className="step-counter" style={{ position: 'fixed', top: '2rem', right: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', zIndex: 999 }}>
                {currentStep + 1} / {steps.length}
            </div>

            <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring' }}
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                boxShadow: '0 10px 40px var(--color-primary-glow)'
                            }}
                        >
                            <Icon size={36} color="white" />
                        </motion.div>

                        {/* Question */}
                        <h2 className="form-question" style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '700' }}>
                            {currentStepData.question}
                        </h2>

                        {/* Input */}
                        {currentStepData.type === 'select' ? (
                            <select
                                ref={inputRef}
                                className="form-input form-select"
                                value={formData[currentStepData.key]}
                                onChange={(e) => handleChange(e.target.value)}
                                onKeyPress={handleKeyPress}
                            >
                                {currentStepData.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                ref={inputRef}
                                type={currentStepData.type}
                                className="form-input"
                                placeholder={currentStepData.placeholder}
                                value={formData[currentStepData.key]}
                                onChange={(e) => handleChange(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        )}

                        {/* Navigation */}
                        <div className="form-navigation" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            {currentStep > 0 && (
                                <button
                                    className="btn btn-outline btn-back"
                                    onClick={handleBack}
                                >
                                    <ArrowLeft size={20} /> Back
                                </button>
                            )}
                            <motion.button
                                className="btn btn-primary btn-continue"
                                onClick={handleNext}
                                disabled={!formData[currentStepData.key]}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    flex: 1,
                                    opacity: formData[currentStepData.key] ? 1 : 0.5
                                }}
                            >
                                {currentStep === steps.length - 1 ? (
                                    <>Submit <Check size={20} /></>
                                ) : (
                                    <>Continue <ArrowRight size={20} /></>
                                )}
                            </motion.button>
                        </div>

                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                            Press <kbd style={{ background: 'var(--color-bg-card)', padding: '0.25rem 0.5rem', borderRadius: '4px', marginLeft: '0.25rem' }}>Enter ↵</kbd> to continue
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .typeform-container {
                        min-height: auto !important;
                        padding: 1.5rem 1rem !important;
                        padding-top: 4rem !important;
                        justify-content: flex-start !important;
                    }
                    .step-counter {
                        top: 1rem !important;
                        right: 1rem !important;
                        font-size: 0.8rem !important;
                    }
                    .form-question {
                        font-size: 1.75rem !important;
                        margin-bottom: 1.5rem !important;
                        line-height: 1.2 !important;
                    }
                    .typeform-container > div > div > div:first-child {
                        width: 60px !important;
                        height: 60px !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .typeform-container > div > div > div:first-child svg {
                        width: 28px !important;
                        height: 28px !important;
                    }
                    .typeform-container .form-input {
                        font-size: 1rem !important;
                        padding: 0.875rem 1rem !important;
                    }
                    .typeform-container .form-navigation {
                        flex-direction: row !important;
                        gap: 0.75rem !important;
                        margin-top: 1.5rem !important;
                    }
                    .typeform-container .btn-back {
                        padding: 0.75rem 1rem !important;
                        font-size: 0.9rem !important;
                        min-width: auto !important;
                        flex: 0 0 auto !important;
                        width: auto !important;
                    }
                    .typeform-container .btn-continue {
                        padding: 0.875rem 1.25rem !important;
                        font-size: 1rem !important;
                        flex: 1 1 auto !important;
                        min-width: 0 !important;
                    }
                    .typeform-container .btn-back svg {
                        width: 16px !important;
                        height: 16px !important;
                    }
                    .typeform-container .btn-continue svg {
                        width: 18px !important;
                        height: 18px !important;
                    }
                    .typeform-container p {
                        font-size: 0.85rem !important;
                        margin-top: 1rem !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default TypeformStep1;
