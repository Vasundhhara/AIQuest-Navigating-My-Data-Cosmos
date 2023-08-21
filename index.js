const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

// Load JSON data from the file
const data = require('./connections.json');
const invitationsData = require('./invitations.json');

app.get('/', (req, res) => {
  res.send('Welcome to the API. Use /getByFirstName?firstName=John to search connections by first name.');
});

app.get('/getByFirstName', (req, res) => {
  const firstName = req.query.firstName;

  if (!firstName) {
    return res.status(400).json({ error: 'First name is required.' });
  }

  const matchingData = data.filter(
    (item) => item && item['First Name'] && item['First Name'].toLowerCase() === firstName.toLowerCase()
  );

  if (matchingData.length === 0) {
    return res.status(404).json({ error: 'No data found for the given first name.' });
  }

  return res.json(matchingData);
});

app.get('/getByDirectionAndDate', (req, res) => {
  const direction = req.query.direction;
  let date = req.query.date;

  // Handle missing or invalid parameters
  if (!direction || !date) {
    return res.status(400).json({ error: 'Direction and date are required.' });
  }

  // Convert date to match the format in the JSON data (e.g., "8/2/23, 9:34 PM" to "8/2/23")
  date = date.split(',')[0].trim();

  const matchingData = invitationsData.filter(
    (item) => item && item['Direction'] === direction && item['Sent At'].startsWith(date)
  );

  if (matchingData.length === 0) {
    return res.status(404).json({ error: 'No data found for the given direction and date.' });
  }

  return res.json(matchingData);
});


const port = 3000; // Change the port number as needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




//http://localhost:3000/getByDirectionAndDate?direction=OUTGOING&date=8/4/23