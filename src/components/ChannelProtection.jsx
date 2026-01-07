import React from 'react';
import { Shield, Ban, Globe } from 'lucide-react';

const ChannelProtection = () => {
    const policies = [
        { title: "Territory Protection", icon: <Shield size={32} color="var(--color-primary)" />, desc: "Exclusive rights to your region based on mutually agreed performance criteria." },
        { title: "No Outside Sales", icon: <Ban size={32} color="var(--color-secondary)" />, desc: "Zero tolerance for cross-territory sales. We prevent partner cannibalization." },
        { title: "No Online Marketplaces", icon: <Globe size={32} color="var(--color-success)" />, desc: "Pricing integrity is maintained by strictly banning sales on Amazon, Flipkart, etc." }
    ];

    return (
        <section className="protection section-padding" style={{ backgroundColor: 'var(--color-gray-50)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '1.5rem' }}>Fair Play & Channel Protection</h2>
                <p className="text-center" style={{ color: 'var(--color-gray-600)', marginBottom: '4rem', fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    We don't just build products; we build protected ecosystems for our partners. Your investment is secured by three key policies:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {policies.map((policy, idx) => (
                        <div key={idx} style={{ backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{policy.icon}</div>
                            <h3 style={{ marginBottom: '1rem' }}>{policy.title}</h3>
                            <p style={{ color: 'var(--color-gray-600)' }}>{policy.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChannelProtection;
