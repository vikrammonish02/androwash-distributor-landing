import React from 'react';

const PartnerProfile = () => {
    return (
        <section className="partner-profile section-padding" style={{ backgroundColor: 'var(--color-gray-100)' }}>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '4rem' }}>Ideal Partner Profile</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }} className="partner-grid">
                    {/* Who You Are */}
                    <div style={{ backgroundColor: 'var(--color-white)', padding: '3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>Who You Are</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-primary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Financial Capacity:</strong> Ability to invest ₹20L+ for long-term growth.
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-primary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Market Access:</strong> Existing network in the medical device or pharma space.
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-primary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Execution Team:</strong> Ready to deploy 2-3 sales professionals.
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Who You'll Sell To */}
                    <div style={{ backgroundColor: 'var(--color-gray-800)', color: 'white', padding: '3rem', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ borderBottom: '2px solid var(--color-secondary)', paddingBottom: '1rem', marginBottom: '2rem', display: 'inline-block' }}>Who You'll Sell To</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-secondary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Specialists:</strong> Gynecologists & Fertility Centers.
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-secondary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Institutions:</strong> Nursing Homes & Private Maternity Hospitals.
                                </div>
                            </li>
                            <li style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <span style={{ background: 'var(--color-secondary)', color: 'white', minWidth: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</span>
                                <div>
                                    <strong>Regions:</strong> Tier 2 & Tier 3 cities with growing fertility needs.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .partner-profile {
                        padding: 2rem 0 !important;
                    }
                    .partner-profile h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .partner-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    .partner-grid > div {
                        padding: 2rem 1.5rem !important;
                    }
                    .partner-grid h3 {
                        font-size: 1.25rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .partner-grid li {
                        margin-bottom: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnerProfile;
