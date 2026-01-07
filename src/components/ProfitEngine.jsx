import React from 'react';
import useConfig from '../hooks/useConfig';

const ProfitEngine = () => {
    const { config, loading } = useConfig();

    if (loading || !config) {
        return <section className="profit-engine section-padding" style={{ minHeight: '600px' }}></section>;
    }

    const { profitEngine: p } = config;

    return (
        <section className="profit-engine section-padding">
            <div className="container">
                <h2 className="text-center" style={{ marginBottom: '1rem' }}>The Your Profit Engine</h2>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>Highly transparent margins with massive recurring potential.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }} className="profit-cards">
                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>One-Time Device Commissions</h3>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                                <span>Device Margin (per unit)</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>{p.deviceMargin}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                                <span>Average Sales Price</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>{p.avgSalesPrice}</span>
                            </div>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>*Standard dealer price. Incentives available for bulk orders.</p>
                    </div>

                    <div className="glass-card" style={{ padding: '2.5rem', background: 'transparent', border: '1px solid var(--color-secondary)' }}>
                        <div style={{ display: 'inline-block', background: 'var(--color-secondary)', color: 'black', padding: '0.25rem 0.75rem', borderRadius: '4px', marginBottom: '1rem', fontWeight: 'bold', fontSize: '0.75rem' }}>MOST POWERFUL</div>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Monthly Recurring Income</h3>
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                                <span>Consumable Margin (per kit)</span>
                                <span style={{ fontWeight: 'bold' }}>{p.consumableMargin}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                                <span>Avg Kits/Clinic/Month</span>
                                <span style={{ fontWeight: 'bold' }}>{p.avgKitsPerMonth} Kits</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)', color: 'var(--color-secondary)' }}>
                                <span>Monthly Income Per Clinic</span>
                                <span style={{ fontWeight: 'bold' }}>{p.monthlyIncomePerClinic}</span>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>The heart of the AndroWash business model.</p>
                    </div>
                </div>

                <div className="glass-card profit-table-card" style={{ marginTop: '5rem', padding: '3rem' }}>
                    <h3 className="text-center" style={{ marginBottom: '3rem' }}>Scaling Your Monthly Income</h3>
                    <div style={{ overflowX: 'auto' }} className="table-wrapper">
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }} className="profit-table">
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <th style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>Number of Active Clinics</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>Recurring Revenue (Monthly)</th>
                                    <th style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>Annual Recurring (ARR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.5rem' }}>{p.tier1.clinics}</td>
                                    <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>{p.tier1.monthly}</td>
                                    <td style={{ padding: '1.5rem' }}>{p.tier1.annual}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '1.5rem' }}>{p.tier2.clinics}</td>
                                    <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>{p.tier2.monthly}</td>
                                    <td style={{ padding: '1.5rem' }}>{p.tier2.annual}</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)', background: 'rgba(16, 185, 129, 0.1)' }}>
                                    <td style={{ padding: '1.5rem' }}>{p.tier3.clinics}</td>
                                    <td style={{ padding: '1.5rem', fontWeight: 'bold', color: 'var(--color-success)' }}>{p.tier3.monthly}</td>
                                    <td style={{ padding: '1.5rem' }}>{p.tier3.annual}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .profit-engine {
                        padding: 2rem 0 !important;
                    }
                    .profit-cards {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                    }
                    .profit-cards .glass-card {
                        padding: 1.5rem !important;
                        margin-bottom: 0 !important;
                    }
                    .profit-table-card {
                        margin-top: 2rem !important;
                        padding: 1.5rem !important;
                    }
                    .profit-table-card h3 {
                        font-size: 1.25rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .table-wrapper {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    .profit-table {
                        font-size: 0.875rem !important;
                        min-width: 100% !important;
                    }
                    .profit-table th,
                    .profit-table td {
                        padding: 0.75rem 0.5rem !important;
                        font-size: 0.8rem !important;
                        white-space: normal !important;
                        word-wrap: break-word !important;
                    }
                        min-width: 500px;
                    }
                    .profit-table th,
                    .profit-table td {
                        padding: 1rem 0.75rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProfitEngine;

