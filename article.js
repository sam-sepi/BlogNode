//router init
const express = require('express');
const router = express.Router();
//Body Parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

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

router.post('/', jsonParser, (req, res) => 
{ 
    let article = req.body;
    let timestamp = Date.now();
    article.timestamp = timestamp;

    db.insert({title: article.title, text: article.text, timestamp: article.timestamp}, (err, newDocs) => 
    {
        if(err) { res.status.apply(500).json({dberr: err}); }
        res.status(200).json({str: 'ID new article ' + newDocs._id});
    });
});

router.put('/', jsonParser, (req, res) => 
{
    let id = req.query.id;
    let article = req.body;
    let timestamp = Date.now();
    article.timestamp = timestamp;

    db.update({ _id: id }, { title: article.title, text: article.text, timestamp: article.timestamp }, (err, updDoc) => 
    {
        if(err) { res.status.apply(500).json({dberr: err}); }

        res.status(200).json({ str: 'Article updated, reload'});
    });
});

router.delete('/', (req, res) => 
{
    let id = req.query.id;

    db.remove({ _id: id }, {}, function (err, numRemoved) 
    {
        if(err) { res.status.apply(500).json({dberr: err}); }

        res.status(200).json({ str: 'ID removed ' + id });
    });
});

router.get('/', (req, res) => 
{
    if(req.query.id) {

        let id = req.query.id;

        db.find({ _id: id }, (err, docs) => 
        {
            if(err) { res.status.apply(500).json({dberr: err}); }

            res.status(200).json({sts: 200, str: 'Authorized', docs: docs});
        });
    }
    else {

        db.find({ }, (err, docs)  =>
        {   
            if(err) res.json({dberr: err}).end();

            res.status(200).json({sts: 200, str: 'Authorized', docs: docs});
        });
    }
});

module.exports = router;