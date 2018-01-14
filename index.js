const express = require('express');

// Constants

const PORT = 1337;
const HOST = '0.0.0.0';

// App

const app = express();
app.get('/', (req, res) => {
  res.send('Halo Bali\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
