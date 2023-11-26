const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (require.main === module) {
  // This module was run directly from the command line as in node xxx.js
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} else {
  // This module was not run directly from the command line as in node xxx.js
  module.exports = app;
}