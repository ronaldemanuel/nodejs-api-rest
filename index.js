const express = require('express');
const consign = require('consign');
const PORT = 3000;

const app = express();

consign()
    .include('controllers')
    .into(app)

app.listen(PORT, () => console.log('Server running on PORT: ' + PORT));