import React, { useState } from 'react';
import useConfig from '../../hooks/useConfig';
import { Save, Lock, Layout, Youtube, IndianRupee, TrendingUp, Package } from 'lucide-react';

const AdminPanel = () => {
    const { config, loading, error, updateConfig } = useConfig();
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [status, setStatus] = useState({ message: '', type: '' });

    if (loading) return <div style={{ padding: '5rem', textAlign: 'center', color: '#fff' }}>Loading configuration...</div>;
    if (error) return <div style={{ padding: '5rem', textAlign: 'center', color: 'red' }}>Error: {error}</div>;

    const handleLogin = (e) => {
        e.preventDefault();
        if (password) {
            setIsAuthenticated(true);
            setStatus({ message: '', type: '' });
        } else {
            setStatus({ message: 'Please enter a password', type: 'error' });
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const newConfig = {
            vsl: {
                youtubeUrl: formData.get('vsl_youtubeUrl'),
                title: formData.get('vsl_title'),
                description: formData.get('vsl_description'),
            },
            profitEngine: {
                deviceMargin: formData.get('pe_deviceMargin'),
                avgSalesPrice: formData.get('pe_avgSalesPrice'),
                consumableMargin: formData.get('pe_consumableMargin'),
                avgKitsPerMonth: formData.get('pe_avgKitsPerMonth'),
                monthlyIncomePerClinic: formData.get('pe_monthlyIncomePerClinic'),
                tier1: {
                    clinics: formData.get('pe_tier1_clinics'),
                    monthly: formData.get('pe_tier1_monthly'),
                    annual: formData.get('pe_tier1_annual'),
                },
                tier2: {
                    clinics: formData.get('pe_tier2_clinics'),
                    monthly: formData.get('pe_tier2_monthly'),
                    annual: formData.get('pe_tier2_annual'),
                },
                tier3: {
                    clinics: formData.get('pe_tier3_clinics'),
                    monthly: formData.get('pe_tier3_monthly'),
                    annual: formData.get('pe_tier3_annual'),
                }
            },
            partnershipPackages: [
                { name: formData.get('tier0_name'), investment: formData.get('tier0_investment'), level: formData.get('tier0_level') },
                { name: formData.get('tier1_name'), investment: formData.get('tier1_investment'), level: formData.get('tier1_level') },
                { name: formData.get('tier2_name'), investment: formData.get('tier2_investment'), level: formData.get('tier2_level') },
            ]
        };

        const result = await updateConfig(newConfig, password);
        if (result.success) {
            setStatus({ message: 'Configuration saved successfully!', type: 'success' });
        } else {
            setStatus({ message: result.error, type: 'error' });
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
                <div className="glass-card" style={{ padding: '3rem', maxWidth: '400px', width: '90%' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Lock color="var(--color-primary)" size={32} />
                        </div>
                        <h2 style={{ color: '#fff' }}>Admin Access</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>Enter password to manage content</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            style={{ marginBottom: '1.5rem' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                    </form>
                    {status.message && (
                        <p style={{ marginTop: '1rem', color: status.type === 'error' ? '#ef4444' : '#10b981', textAlign: 'center', fontSize: '0.875rem' }}>
                            {status.message}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '4rem 2rem' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ color: '#fff', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                        <p style={{ color: 'var(--color-text-muted)' }}>Update landing page content and financial values</p>
                    </div>
                    <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Logout</button>
                </div>

                <form onSubmit={handleSave}>
                    {/* VSL Settings */}
                    <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-primary)' }}>
                            <Youtube size={24} /> Video Sales Letter (VSL)
                        </h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>YouTube Embed URL</label>
                                <input name="vsl_youtubeUrl" defaultValue={config.vsl.youtubeUrl} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Section Title</label>
                                <input name="vsl_title" defaultValue={config.vsl.title} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Description</label>
                                <textarea name="vsl_description" defaultValue={config.vsl.description} className="form-control" style={{ width: '100%', minHeight: '80px' }} />
                            </div>
                        </div>
                    </div>

                    {/* Profit Engine Settings */}
                    <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-secondary)' }}>
                            <TrendingUp size={24} /> Profit Engine Values
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Device Margin (₹)</label>
                                <input name="pe_deviceMargin" defaultValue={config.profitEngine.deviceMargin} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Avg Sales Price (₹)</label>
                                <input name="pe_avgSalesPrice" defaultValue={config.profitEngine.avgSalesPrice} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Consumable Margin (₹)</label>
                                <input name="pe_consumableMargin" defaultValue={config.profitEngine.consumableMargin} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Avg Kits/Month</label>
                                <input name="pe_avgKitsPerMonth" defaultValue={config.profitEngine.avgKitsPerMonth} className="form-control" style={{ width: '100%' }} />
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Monthly Income Per Clinic (₹)</label>
                                <input name="pe_monthlyIncomePerClinic" defaultValue={config.profitEngine.monthlyIncomePerClinic} className="form-control" style={{ width: '100%' }} />
                            </div>
                        </div>

                        <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Income Tiers</h4>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px' }}>
                                <input name={`pe_tier${i}_clinics`} defaultValue={config.profitEngine[`tier${i}`].clinics} className="form-control" placeholder="Clinics" />
                                <input name={`pe_tier${i}_monthly`} defaultValue={config.profitEngine[`tier${i}`].monthly} className="form-control" placeholder="Monthly" />
                                <input name={`pe_tier${i}_annual`} defaultValue={config.profitEngine[`tier${i}`].annual} className="form-control" placeholder="Annual" />
                            </div>
                        ))}
                    </div>

                    {/* Partnership Packages */}
                    <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-success)' }}>
                            <Package size={24} /> Partnership Packages
                        </h3>
                        {config.partnershipPackages.map((tier, idx) => (
                            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Tier Name</label>
                                    <input name={`tier${idx}_name`} defaultValue={tier.name} className="form-control" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Investment (₹)</label>
                                    <input name={`tier${idx}_investment`} defaultValue={tier.investment} className="form-control" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Regional Level</label>
                                    <input name={`tier${idx}_level`} defaultValue={tier.level} className="form-control" style={{ width: '100%' }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ position: 'sticky', bottom: '2rem', textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary" style={{ padding: '1rem 4rem', fontSize: '1.125rem', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}>
                            <Save size={20} style={{ marginRight: '0.75rem' }} /> Save Changes
                        </button>
                    </div>
                </form>

                {status.message && (
                    <div style={{
                        marginTop: '2rem',
                        padding: '1rem',
                        borderRadius: '8px',
                        backgroundColor: status.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                        color: status.type === 'error' ? '#ef4444' : '#10b981',
                        border: `1px solid ${status.type === 'error' ? '#ef4444' : '#10b981'}`,
                        textAlign: 'center'
                    }}>
                        {status.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
