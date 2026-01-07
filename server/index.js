const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;
const CONFIG_PATH = path.join(__dirname, 'data', 'config.json');

app.use(cors());
app.use(bodyParser.json());

// Simple password for "admin" panel updates
const ADMIN_PASSWORD = 'admin123';

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
        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`
            },
            body: JSON.stringify(hubspotData)
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('HubSpot API Error:', result);
            return res.status(response.status).json({ 
                error: 'Failed to submit to HubSpot', 
                details: result.message || result 
            });
        }

        res.json({ 
            success: true, 
            message: 'Form submitted to HubSpot successfully',
            contactId: result.id 
        });
    } catch (error) {
        console.error('HubSpot submission error:', error);
        res.status(500).json({ 
            error: 'Failed to submit to HubSpot', 
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
