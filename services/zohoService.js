const axios = require("axios");

async function fetchZohoData() {
  const url =
    "https://creator.zoho.com/api/v2/dev_it/my-first-project/report/All_Requests";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization:
          "Zoho-oauthtoken 1000.c7faf8ada1f87996d75e8abb5821307a.ef9a6f2c72d2ef24a2fb908ccd16f5e1",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data from Zoho:", error);
  }
}

fetchZohoData();
