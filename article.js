const express = require('express');
const router = express.Router();

const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
})

module.exports = router;