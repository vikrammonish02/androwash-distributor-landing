import React from 'react';

const Timeline = () => {
    const steps = [
        { month: "Months 7-10", label: "Break-Even", desc: "20-25 Clinics active", icon: "🌱" },
        { month: "Months 10-18", label: "Strong Income", desc: "30-40 Clinics active", icon: "🌿" },
        { month: "Months 18+", label: "High Performer", desc: "50+ Clinics active", icon: "🌳" }
    ];

    return (
        <section className="timeline section-padding" style={{ background: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '4rem', color: 'white' }}>Path to Profitability Timeline</h2>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                    {/* Connecting Line (Desktop) */}
                    <div style={{ position: 'absolute', top: '50px', left: '10%', right: '10%', height: '2px', background: 'rgba(255,255,255,0.2)', zIndex: 0 }} className="desktop-line"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} style={{ flex: '1 1 250px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{step.icon}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{step.month}</div>
                            <h3 style={{ marginBottom: '1rem', color: 'white' }}>{step.label}</h3>
                            <p style={{ color: 'white', opacity: 1 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-line { display: none; }
        }
      `}</style>
        </section>
    );
};

export default Timeline;
