const axios = require('axios');

exports.handler = async function(event, context) {
  // Din Notion API-token
  const notionToken = 'secret_6ccxFGe4dyLPbrK33CbgNDYDqIpnETQFHbg0MgB5z2f';
  const databaseId = 'cac13f0403f94a00abb18034c9f4fcbf';

  try {
    // Skicka en POST-förfrågan till Notion API via serverless-funktionen
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {}, // Om du behöver skicka extra parametrar i request body, lägg till dem här
      {
        headers: {
          Authorization: `Bearer ${notionToken}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
      }
    );
    
    // Returnera datan från Notion
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
