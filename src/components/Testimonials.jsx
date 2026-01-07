import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const socialProof = [
        { name: "Dr. Arvind Kumar", role: "Gynecologist, IVF Specialist", text: "AndroWash has completely automated our semen processing. The results are consistent and WHO-compliant." },
        { name: "Rajesh Mehra", role: "State Distributor, Maharashtra", text: "The recurring income from consumables is what differentiates this from other medical device businesses. Exceptional support." },
        { name: "Sita Sharma", role: "IVF Center Owner", text: "Reduced our dependency on specialized lab technicians. Highly recommended for Tier 2 city clinics." }
    ];

    const mediaLogos = [
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sony_TV_new.png",
        "https://upload.wikimedia.org/wikipedia/en/8/88/Shark_Tank_India_logo.png",
        "https://companieslogo.com/img/orig/TATA_CONSULTANCY_SERVICES-1-fb181283.png?t=1720244494",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/The_Economic_Times_logo.svg/2560px-The_Economic_Times_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/1920px-YourStory_Logo.svg.png"
    ];

    return (
        <section className="testimonials section-padding" style={{ position: 'relative' }}>
            <div className="container">

                <h2 className="text-center" style={{ marginBottom: '3rem' }}>Trusted by Doctors & Distributors</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="testimonial-cards">
                    {socialProof.map((item, idx) => (
                        <div key={idx} className="glass-card" style={{ padding: '2.5rem', position: 'relative' }}>
                            <Quote size={40} color="var(--color-primary)" style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.3 }} />
                            <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-text)', position: 'relative', zIndex: 1, fontSize: '1.1rem' }}>"{item.text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.name[0]}</div>
                                <div>
                                    <div style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .testimonials {
                        padding: 2rem 0 !important;
                    }
                    .testimonials h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .testimonial-cards {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .testimonial-cards .glass-card {
                        padding: 1.5rem !important;
                    }
                    .testimonial-cards p {
                        font-size: 1rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
