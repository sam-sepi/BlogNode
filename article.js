const express = require('express');
const router = express.Router();

router.get('/', (req, res) => 
{
    res.json({Response: 'Received'});
})

module.exports = router;