const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Node.js!');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
