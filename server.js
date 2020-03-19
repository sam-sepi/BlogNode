//espress init
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
//helmet middl. for protection
const helmet = require('helmet');
app.use(helmet());
//Db init
const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });
//miniApp
const article = require('./article');
app.use('/article', article);

const auth = require('./auth');
app.use('/auth', auth);

const api = require('./api');
app.use('/api', api);

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`LISTEN ON PORT ${PORT}`);
});