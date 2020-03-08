//espress init
const express = require('express');
const app = express();
//helmet middl. for protection
const helmet = require('helmet');
app.use(helmet());
//miniApp
const article = require('./article');
app.use('/article', article);

const auth = require('./auth');
app.use('/auth', auth);

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTEN ON PORT ${PORT}`);
});