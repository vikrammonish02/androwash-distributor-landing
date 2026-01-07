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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
