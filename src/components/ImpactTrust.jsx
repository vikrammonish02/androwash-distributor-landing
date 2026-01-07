import React from 'react';
import { ShieldCheck, MapPin, Users, HeartPulse } from 'lucide-react';

// Assets
import consultationImg from '../assets/impact/campaign-consultation.png';
import bannerImg from '../assets/impact/campaign-banner.png';
import clinicalSessionImg from '../assets/impact/clinical-session.jpg';
import outreachTeamImg from '../assets/impact/outreach-team.jpg';
import hospitalPartnershipImg from '../assets/impact/hospital-partnership.jpg';
import hospitalLobbyImg from '../assets/impact/hospital-lobby.jpg';
import outdoorCampImg from '../assets/impact/outdoor-camp.jpg';

const ImpactTrust = () => {
    const highlights = [
        {
            icon: <HeartPulse className="text-red-500" />,
            title: "World's First Home IUI",
            desc: "Pioneering accessible fertility solutions that bring specialized care directly to families."
        },
        {
            icon: <ShieldCheck className="text-green-500" />,
            title: "Clinical Excellence",
            desc: "Products designed with rigorous medical oversight, ensuring safety and high success rates."
        },
        {
            icon: <Users className="text-blue-500" />,
            title: "Community Trust",
            desc: "Successfully helping thousands through dedicated outreach and partner-led campaigns."
        },
        {
            icon: <MapPin className="text-orange-500" />,
            title: "Deep Rural Reach",
            desc: "Bridging the gap in reproductive healthcare across Tier 2, 3 cities and rural India."
        }
    ];

    const galleryImages = [
        { src: clinicalSessionImg, alt: "Clinical Consultation", span: "row-span-2 col-span-2", label: "Consultation" },
        { src: bannerImg, alt: "Campaign Banner", span: "col-span-1", label: "Outreach" },
        { src: hospitalPartnershipImg, alt: "Hospital Partnership", span: "row-span-2", label: "Partnerships" },
        { src: outreachTeamImg, alt: "Campaign Team", span: "col-span-1", label: "The Team" },
        { src: hospitalLobbyImg, alt: "Hospital Presence", span: "col-span-1", label: "Clinical Presence" },
        { src: consultationImg, alt: "Medical Oversight", span: "col-span-1", label: "Expertise" },
        { src: outdoorCampImg, alt: "Outdoor Campaign", span: "col-span-2", label: "Rural Impact" }
    ];

    return (
        <section className="impact-trust section-padding" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--color-primary)',
                        borderRadius: '20px',
                        fontWeight: '600',
                        fontSize: '0.875rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Real-World Impact
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0F172A' }}>The Chhatisgarh Campaign & Beyond</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#475569', fontSize: '1.125rem' }} className="campaign-description">
                        We don't just sell devices; we change lives. Our campaigns across India prove that there is massive,
                        underserved demand for affordable fertility solutions.
                    </p>
                </div>

                {/* Professional Gallery Grid */}
                <div
                    className="campaign-gallery"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridAutoRows: '200px',
                        gap: '1.5rem',
                        marginBottom: '5rem'
                    }}
                >
                    {galleryImages.map((img, idx) => (
                        <div key={idx} style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            gridColumn: img.span.includes('col-span-2') ? 'span 2' : 'span 1',
                            gridRow: img.span.includes('row-span-2') ? 'span 2' : 'span 1'
                        }}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                    display: 'block'
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                padding: '1.5rem 1rem 0.75rem',
                                color: '#fff',
                                pointerEvents: 'none'
                            }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    opacity: 1,
                                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    {img.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ paddingRight: '2rem' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#0F172A' }}>Why Partners Trust Subhag</h3>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {highlights.map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{
                                        flexShrink: 0,
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--color-gray-100)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0F172A', fontSize: '1.25rem' }}>{item.title}</h4>
                                        <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        padding: '3rem',
                        background: 'linear-gradient(135deg, var(--color-bg-card) 0%, var(--color-bg-light) 100%)',
                        borderRadius: '24px',
                        color: '#fff',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent)', pointerEvents: 'none' }}></div>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', position: 'relative', color: '#FFFFFF', fontWeight: '700' }}>Join the Subhag Distribution Network</h3>
                        <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', color: '#FFFFFF', fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.95 }}>
                            Our Chhatisgarh campaign saw over 500+ inquiries in just 7 days. Be the partner who brings this
                            life-changing technology to your region.
                        </p>
                        <button className="btn btn-primary" onClick={() => document.getElementById('step-1')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get Exclusive Rights for Your Region
                        </button>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .impact-trust {
                        padding: 2rem 0 !important;
                    }
                    .impact-trust h2 {
                        font-size: 1.75rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .campaign-description {
                        font-size: 1rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .campaign-gallery { 
                        grid-template-columns: 1fr !important; 
                        grid-auto-rows: 250px !important;
                        gap: 1rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .campaign-gallery > div { 
                        grid-column: span 1 !important; 
                        grid-row: span 1 !important; 
                    }
                    .impact-trust > div > div:last-child {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .impact-trust > div > div:last-child > div:last-child {
                        padding: 2rem 1.5rem !important;
                    }
                }
                @media (max-width: 1024px) {
                    .campaign-gallery { 
                        grid-template-columns: repeat(2, 1fr) !important; 
                    }
                }
            `}} />
        </section>
    );
};

export default ImpactTrust;
