/**
 * Simple script to verify HubSpot API connection
 * Use: HUBSPOT_API_KEY=your_key node server/verify_hubspot.js
 */
async function verifyHubSpot() {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

    if (!HUBSPOT_API_KEY) {
        console.error('❌ Error: HUBSPOT_API_KEY environment variable is not set.');
        console.log('Usage: HUBSPOT_API_KEY=your_token_here node server/verify_hubspot.js');
        process.exit(1);
    }

    console.log('🔍 Testing HubSpot API connection...');

    try {
        // We'll just try to list properties for contacts as a basic permissions check
        const response = await fetch('https://api.hubapi.com/crm/v3/properties/contacts', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ Success! Successfully connected to HubSpot API.');
            console.log(`📊 Found ${data.results?.length || 0} contact properties.`);

            // Check for custom properties we might need
            const properties = data.results.map(p => p.name);
            const requiredProps = ['business_type', 'investment_range', 'agreed_to_terms'];

            console.log('\nChecking for custom properties:');
            requiredProps.forEach(prop => {
                if (properties.includes(prop)) {
                    console.log(`  - ${prop}: Found ✅`);
                } else {
                    console.log(`  - ${prop}: NOT FOUND ⚠️ (You may need to create this in HubSpot)`);
                }
            });
        } else {
            const errorData = await response.json();
            console.error('❌ Error: HubSpot API request failed.');
            console.error(`Status: ${response.status} ${response.statusText}`);
            console.error('Details:', JSON.stringify(errorData, null, 2));
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Error: An unexpected error occurred.');
        console.error(error.message);
        process.exit(1);
    }
}

verifyHubSpot();
