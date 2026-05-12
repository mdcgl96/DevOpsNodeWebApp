'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Test</title></head>
      <body>
        <h1>Hello FS2026 DevOps Course auf Azure und Docker!</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
