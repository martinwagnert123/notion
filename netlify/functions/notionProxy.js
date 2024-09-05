const axios = require('axios');

exports.handler = async function(event, context) {
  const notionToken = 'secret_6ccxFGe4dyLPbrK33CbgNDYDqIpnETQFHbg0MgB5z2f';  // Din Notion API-token
  const databaseId = 'cac13f0403f94a00abb18034c9f4fcbf';  // Ditt Notion-databas-ID

  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {},  // Här kan du skicka extra parametrar om det behövs
      {
        headers: {
          Authorization: `Bearer ${notionToken}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',  // Se till att du använder rätt Notion API-version
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),  // Returnera Notion-datan till frontend
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

