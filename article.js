//router init
const express = require('express');
const router = express.Router();
//Body Parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//Db init
const Datastore = require('nedb');
db = new Datastore({ filename: 'articles.db', autoload: true });

// required for access
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

const exjwt = require('express-jwt');
const jwtMW = exjwt({
    secret: 'mySecretKey'
});

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
});

router.post('/', jwtMW, jsonParser, (req, res) =>
{
    const article = req.body;
    const timestamp = Date.now();
    article.timestamp = timestamp;
    db.insert(article);

    res.json(article);
});

//handle error jwt
router.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { 
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});

module.exports = router;