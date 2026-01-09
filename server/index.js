const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;
const CONFIG_PATH = path.join(__dirname, 'data', 'config.json');

console.log('--- Server Configuration ---');
console.log('PORT:', PORT);
console.log('CONFIG_PATH:', CONFIG_PATH);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('---------------------------');

app.use(cors());
app.use(express.json());

// Security for "admin" panel updates
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

app.get('/api/config', (req, res) => {
    fs.readFile(CONFIG_PATH, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read config' });
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/config', (req, res) => {
    const { password, config } = req.body;

    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save config' });
        }
        res.json({ message: 'Config updated successfully' });
    });
});

// HubSpot Integration Endpoint
app.post('/api/submit-to-hubspot', async (req, res) => {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

    if (!HUBSPOT_API_KEY) {
        return res.status(500).json({ error: 'HubSpot API key not configured' });
    }

    const formData = req.body;

    try {
        // Prepare HubSpot contact data
        const hubspotData = {
            properties: {
                email: formData.email,
                firstname: formData.fullName?.split(' ')[0] || formData.fullName,
                lastname: formData.fullName?.split(' ').slice(1).join(' ') || '',
                phone: formData.phone,
                city: formData.city,
                business_type: formData.businessType || '',
                investment_range: formData.investmentRange || '',
                agreed_to_terms: formData.agreedToTerms ? 'Yes' : 'No',
                marketing_consent: formData.marketing ? 'Yes' : 'No',
                lead_source: 'AndroWash Distribution Landing Page',
                lifecyclestage: 'lead'
            }
        };

        // Submit to HubSpot Contacts API
        console.log('Sending request to HubSpot API...');
        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`
            },
            body: JSON.stringify(hubspotData)
        });

        const contentType = response.headers.get('content-type');
        let result;

        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            const textResponse = await response.text();
            console.error('HubSpot returned non-JSON response:', textResponse.substring(0, 500));
            return res.status(response.status).json({
                error: 'HubSpot returned invalid response format',
                details: `Expected JSON but received ${contentType || 'unknown'}. Status: ${response.status}`,
                rawSnippet: textResponse.substring(0, 200)
            });
        }

        if (!response.ok) {
            console.error('HubSpot API Error:', result);
            return res.status(response.status).json({
                error: 'Failed to submit to HubSpot',
                details: result.message || result
            });
        }

        console.log('HubSpot submission successful');
        res.json({
            success: true,
            message: 'Form submitted to HubSpot successfully',
            contactId: result.id
        });
    } catch (error) {
        console.error('HubSpot submission error:', error);
        res.status(500).json({
            error: 'Internal server error during HubSpot submission',
            details: error.message
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
