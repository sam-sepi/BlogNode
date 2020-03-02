const express = require('express');
const router = express.Router();

const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
})

router.post('/', (req, res) =>
{
    const article = req.body;
    const timestamp = Date.now();
    article.timestamp = timestamp;
    db.insert(article, (err, newDoc) => 
    {
        console.log(err);
    });

    res.json(article);
});

module.exports = router;