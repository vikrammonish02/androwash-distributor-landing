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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }} className="support-pillars">
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
            <style>{`
                @media (max-width: 768px) {
                    .support {
                        padding: 2rem 0 !important;
                    }
                    .support h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .support-pillars {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .support-pillars > div {
                        padding: 1.5rem !important;
                    }
                    .support-pillars h3 {
                        font-size: 1.125rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default SupportSystem;
