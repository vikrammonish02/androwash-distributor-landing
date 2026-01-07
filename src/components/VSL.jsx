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
        </section>
    );
};

export default VSL;

