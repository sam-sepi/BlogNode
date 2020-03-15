//router init
const express = require('express');
const router = express.Router();
//Body Parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//Db init
const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });

const jwt = require('jsonwebtoken');

router.all('/', (req, res, next) => {

    token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, 'mySecretKey', (err, decoded) => 
    {
        if(err) 
        {
            res.status(401).json({sts: 401, str: 'Unauthorized', err: err.name, msg: err.message});
        }
        else
        {
            next();
        }
    });
});

router.get('/:id', (req, res) => 
{
    let id = req.params.id;

    db.find({_id: id}, (err, docs)  =>
    {
        if(err) res.json({dberr: err}).end();

        res.status(200).json({sts: 200, str: 'Authorized', docs: docs});
    });
});

router.post('/', jsonParser, (req, res) => 
{ 
    let article = req.body;
    let timestamp = Date.now();
    article.timestamp = timestamp;

    db.insert({article: article.title, text: article.text, timestamp: article.timestamp}, (err, newDocs) => 
    {
        if(err) { res.status.apply(500).json({dberr: err}); }
        res.status(200).json({str: 'ID new article ' + newDocs._id});
    });
});

module.exports = router;