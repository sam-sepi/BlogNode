const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
})

router.post('/', jsonParser, (req, res) =>
{
    const article = req.body;
    const timestamp = Date.now();
    article.timestamp = timestamp;
    db.insert(article);

    res.json(article);
});

module.exports = router;