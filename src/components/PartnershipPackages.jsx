import React from 'react';
import { Check } from 'lucide-react';
import useConfig from '../hooks/useConfig';

const PartnershipPackages = () => {
    const { config, loading } = useConfig();

    if (loading || !config) {
        return <section className="packages section-padding" style={{ position: 'relative', minHeight: '600px' }}></section>;
    }

    const staticTiers = [
        {
            name: "Retailer Starter",
            level: "District-level",
            features: ["Device Sales Rights", "Consumable Supply", "Basic Training"],
            popular: false
        },
        {
            name: "Distributor Standard",
            level: "State-level",
            features: ["Priority Territory Rights", "Digital Marketing Support", "Advanced Training", "Higher Margins"],
            popular: true
        },
        {
            name: "Super Distributor Premium",
            level: "Multi-state",
            features: ["Exclusive Regional Rights", "Dedicated Sales Team", "White-glove Support", "Maximum Margins"],
            popular: false
        }
    ];

    const tiers = config.partnershipPackages.map((dynamicTier, idx) => ({
        ...staticTiers[idx],
        ...dynamicTier
    }));

    return (
        <section className="packages section-padding" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'var(--color-primary-glow)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1 }}></div>
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '1rem' }}>Partnership Packages</h2>
                <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--color-text-muted)' }}>Choose the tier that fits your investment capacity.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="package-cards">
                    {tiers.map((tier, idx) => (
                        <div key={idx} className="glass-card" style={{
                            padding: '3rem 2rem',
                            position: 'relative',
                            transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
                            zIndex: tier.popular ? 2 : 1,
                            display: 'flex',
                            flexDirection: 'column',
                            border: tier.popular ? '1px solid var(--color-secondary)' : undefined,
                            boxShadow: tier.popular ? '0 0 30px rgba(245, 158, 11, 0.2)' : undefined
                        }}>
                            {tier.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--color-secondary)',
                                    color: '#000',
                                    padding: '0.25rem 1rem',
                                    borderRadius: '20px',
                                    fontWeight: '800',
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.05em',
                                    boxShadow: '0 4px 10px rgba(245, 158, 11, 0.4)'
                                }}>
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', color: '#fff' }}>{tier.name}</h3>
                            <p style={{ color: tier.popular ? 'var(--color-secondary)' : 'var(--color-primary)', fontWeight: 'bold', fontSize: '1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tier.level}</p>

                            <div style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '2rem', color: '#fff', letterSpacing: '-1px' }}>{tier.investment}</div>

                            <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                                {tier.features.map((feature, fidx) => (
                                    <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'white', fontSize: '1rem' }}>
                                        <div style={{ background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
                                            <Check size={14} color="var(--color-success)" strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={tier.popular ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%' }}>
                                {tier.popular ? 'Become a Partner Now' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .packages {
                        padding: 2rem 0 !important;
                    }
                    .package-cards {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .package-cards .glass-card {
                        padding: 2rem 1.5rem !important;
                        transform: scale(1) !important;
                        margin-bottom: 0 !important;
                    }
                    .package-cards .glass-card h3 {
                        font-size: 1.25rem !important;
                    }
                    .package-cards .glass-card button {
                        white-space: normal !important;
                        word-wrap: break-word !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnershipPackages;

