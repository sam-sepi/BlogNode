const express = require('express');
const router = express.Router();
//Body Parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//JWT
const jwt = require('jsonwebtoken');

const user = {

    username: 'username',
    password: 'password'
};

router.post('/', jsonParser, (req, res, next) => {

    if (req.body.username == user.username && req.body.password == user.password)
    {
        let token = jwt.sign({ id: user.id, username: user.username }, 'mySecretKey', { expiresIn: 129600 }); // Sigining the token
        res.json({
            sucess: true,
            err: null,
            token
        });
    }
    else {
        res.status(401).json({
            sucess: false,
            token: null,
            err: 'Username or password is incorrect'
        });
    }
});

module.exports = router;