import React from 'react';
import useConfig from '../hooks/useConfig';

const VSL = () => {
    const { config, loading } = useConfig();

    if (loading || !config) {
        return <section className="vsl section-padding" style={{ backgroundColor: 'var(--color-gray-100)', minHeight: '400px' }}></section>;
    }

    const { youtubeUrl, title, description } = config.vsl;

    return (
        <section className="vsl section-padding" style={{ backgroundColor: 'var(--color-gray-100)' }}>
            <div className="container">
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
                    <p style={{ color: 'var(--color-gray-600)', marginBottom: '3rem', fontSize: '1.125rem' }}>{description}</p>

                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', backgroundColor: '#000' }}>
                        <iframe
                            src={youtubeUrl}
                            title="AndroWash Founder Pitch"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.25rem' }}>
                            Proceed to Partnership Details
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .vsl {
                        padding: 2rem 0 !important;
                    }
                    .vsl h2 {
                        font-size: 1.5rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                    .vsl p {
                        font-size: 1rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .vsl .btn {
                        width: 100% !important;
                        padding: 1rem 1.5rem !important;
                        font-size: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default VSL;

