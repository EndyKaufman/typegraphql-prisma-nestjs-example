// fake main.js, need for correct run deploy process in vercel

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('ok'));

app.listen(process.env.PORT, () => console.log('Server ready on port 3000.'));

module.exports = app;
