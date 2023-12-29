// server.js

const express = require('express');
const fetch = require('node-fetch').default;
const cors = require('cors');

const app = express();
const PORT = 3001; // Change the port if necessary

app.use(cors());

app.get('/covid19data', async (req, res) => {
  try {
    const response = await fetch('https://api.covid19india.org/data.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching COVID-19 data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
