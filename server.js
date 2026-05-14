const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Static files aus dem Ordner "public" bereitstellen
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Node Web App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          text-align: center;
        }

        img {
          max-width: 500px;
          width: 100%;
          height: auto;
          border-radius: 12px;
        }
      </style>
    </head>
    <body>
      <h1>Mein Bild</h1>
      <img src="/images/mein-bild.png" alt="Mein Bild" />
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});