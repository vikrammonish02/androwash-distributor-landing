import React from 'react';
import { BookOpen, Wrench, Headphones, Users } from 'lucide-react';

const SupportSystem = () => {
    const pillars = [
        { title: "Training & Certification", icon: <BookOpen size={40} />, desc: "Comprehensive onboarding for your sales and technical teams." },
        { title: "Marketing Arsenal", icon: <Users size={40} />, desc: "Ready-to-use brochures, digital ads, and presentation decks." },
        { title: "Technical Support", icon: <Wrench size={40} />, desc: "24/7 technical helpline and on-field support coordination." },
        { title: "Success Manager", icon: <Headphones size={40} />, desc: "Dedicated manager to help you hit your ROI milestones." }
    ];

    return (
        <section className="support section-padding" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '4rem', color: '#0F172A' }}>Four-Pillar Support System</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
                    {pillars.map((pillar, idx) => (
                        <div key={idx} style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {pillar.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#0F172A' }}>{pillar.title}</h3>
                            <p style={{ color: '#475569' }}>{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportSystem;
