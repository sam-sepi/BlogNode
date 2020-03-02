const express = require('express');
const app = express();

const article = require('./article');
app.use('/article', article);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTEN ON PORT ${PORT}`);
})