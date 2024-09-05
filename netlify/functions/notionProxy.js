const axios = require('axios');

exports.handler = async function(event, context) {
  const notionToken = 'secret_6ccxFGe4dyLPbrK33CbgNDYDqIpnETQFHbg0MgB5z2f';  // Din Notion API-token
  const databaseId = 'cac13f0403f94a00abb18034c9f4fcbf';  // Ditt faktiska Notion-databas-ID

  console.log("Anropar Notion API...");
  
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${notionToken}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        }
      }
    );

    console.log("Data hämtad från Notion:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Fel vid anrop till Notion API:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

