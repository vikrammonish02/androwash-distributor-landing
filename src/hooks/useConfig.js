import { useState, useEffect } from 'react';

const useConfig = () => {
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchConfig = async () => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || '/api';
            const response = await fetch(`${apiUrl}/config`);
            if (!response.ok) {
                throw new Error('Failed to fetch config');
            }
            const data = await response.json();
            setConfig(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConfig();
    }, []);

    const updateConfig = async (newConfig, password) => {
        try {
            const apiUrl = import.meta.env.VITE_API_URL || '/api';
            const response = await fetch(`${apiUrl}/config`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password,
                    config: newConfig,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to update config');
            }

            setConfig(newConfig);
            return { success: true };
        } catch (err) {
            return { success: false, error: err.message };
        }
    };

    return { config, loading, error, updateConfig, refresh: fetchConfig };
};

export default useConfig;
