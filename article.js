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

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
});

router.get('/dashboard', (req, res) => 
{
    if(req.headers.authorization.split(' ')[0] === 'Bearer')
    {
        token = req.headers.authorization.split(' ')[1];

        try {
            
            let ver = jwt.verify(token, 'mySecretKey');
            res.json(token);

        } catch(err)
        {
            res.status(401).send(err);
            res.end();
        }
    }
    else 
    {
        res.status(401).send(err);
        res.end();
    }
});

//handle error jwt
router.use(function (err, req, res, next) 
{
    if (err.name === 'UnauthorizedError') 
    { 
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});

module.exports = router;