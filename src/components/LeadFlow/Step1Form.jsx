import React from 'react';
import { useForm } from 'react-hook-form';

const Step1Form = ({ onNext, data }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: data
    });

    const onSubmit = (formData) => {
        onNext(formData);
    };

    return (
        <div className="form-step">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Step 1: Partner Pre-Qualification</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--color-gray-600)' }}>Tell us about your business and investment capacity to see if you qualify for a regional partnership.</p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>Full Name *</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            placeholder="Enter your name"
                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                        />
                        {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name.message}</span>}
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>WhatsApp Number *</label>
                        <input
                            {...register("whatsapp", { required: "WhatsApp number is required" })}
                            placeholder="+91"
                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                        />
                        {errors.whatsapp && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.whatsapp.message}</span>}
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>Email Address *</label>
                    <input
                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
                        placeholder="email@example.com"
                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email.message}</span>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>City *</label>
                        <input
                            {...register("city", { required: "City is required" })}
                            placeholder="e.g. Mumbai"
                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>Preferred Territory *</label>
                        <input
                            {...register("territory", { required: "Territory is required" })}
                            placeholder="State or Region"
                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', fontSize: '1rem', transition: 'all 0.3s ease' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>Investment Budget *</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            {...register("budget", { required: "Please select a budget range" })}
                            style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', appearance: 'none', background: 'white', fontSize: '1rem', transition: 'all 0.3s ease' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                        >
                            <option value="">Select Budget Range</option>
                            <option value="5-10L">₹5 Lakh - ₹10 Lakh</option>
                            <option value="15-25L">₹15 Lakh - ₹25 Lakh</option>
                            <option value="40-60L">₹40 Lakh - ₹60 Lakh</option>
                        </select>
                        <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-gray-600)' }}>▼</div>
                    </div>
                    {errors.budget && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.budget.message}</span>}
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gray-600)' }}>Current Business Network Strength</label>
                    <textarea
                        {...register("network")}
                        placeholder="Mention your work with clinics, hospitals, or pharma distribution..."
                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '2px solid var(--color-gray-200)', minHeight: '120px', fontSize: '1rem', transition: 'all 0.3s ease' }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-gray-200)'}
                    ></textarea>
                </div>

                <button className="btn btn-primary pulse" type="submit" style={{ width: '100%', marginTop: '1.5rem', fontSize: '1.25rem' }}>
                    Continue to Terms & Conditions →
                </button>
            </form>
        </div>
    );
};

export default Step1Form;
