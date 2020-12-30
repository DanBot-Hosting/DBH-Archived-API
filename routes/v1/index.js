const router = require('express').Router();

router.use('/animal', require('./animal'));

module.exports = router;
