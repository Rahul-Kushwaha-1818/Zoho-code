const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

// Function to fetch data from Zoho Creator
async function fetchZohoData(accessToken) {
  const url =  "https://creator.zoho.com/api/v2/dev_it/my-first-project/report/All_Requests";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Zoho:', error);
  }
}

// Function to refresh the access token
async function refreshAccessToken() {
  const url = 'https://accounts.zoho.in/oauth/v2/token';
  
  const params = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    refresh_token: process.env.REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  try {
    const response = await axios.post(url, params);
    return response.data.access_token;
  } catch (error) {
    console.error('Error refreshing access token:', error);
  }
}

module.exports = { fetchZohoData, refreshAccessToken };
