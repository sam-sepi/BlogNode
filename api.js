//router init
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
{
    db.find({ }, (err, docs)  =>
    {   
        if(err) res.json({dberr: err}).end();

        res.status(200).json({docs: docs});
    });
    
});

module.exports = router;