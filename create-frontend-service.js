#!/usr/bin/env node

// Script to create frontend service via Railway API
// This uses Railway's GraphQL API

const https = require('https');
const fs = require('fs');
const path = require('path');

// Read Railway token from config
const configPath = path.join(process.env.HOME, '.railway', 'config.json');
let token = '';

try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    token = config.token || config.auth?.token || '';
} catch (e) {
    console.error('Could not read Railway config');
    process.exit(1);
}

const projectId = '0c418e7f-ee9a-4c10-ad49-8d63251ca86e';
const environmentId = 'e8678038-f823-4296-bbfa-6061f71e5bf6';

const mutation = `
mutation {
  serviceCreate(
    projectId: "${projectId}"
    environmentId: "${environmentId}"
    name: "frontend"
  ) {
    id
    name
  }
}
`;

const data = JSON.stringify({
    query: mutation
});

const options = {
    hostname: 'backboard.railway.app',
    path: '/graphql/v1',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'Authorization': `Bearer ${token}`
    }
};

const req = https.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => {
        try {
            const result = JSON.parse(body);
            if (result.errors) {
                console.error('Error:', result.errors);
                process.exit(1);
            }
            console.log('Service created:', result.data?.serviceCreate);
        } catch (e) {
            console.error('Parse error:', e);
            process.exit(1);
        }
    });
});

req.on('error', (e) => {
    console.error('Request error:', e);
    process.exit(1);
});

req.write(data);
req.end();

