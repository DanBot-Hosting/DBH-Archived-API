const express = require('express');
const router = express.Router();
const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100 // Amount of request
});


router.use('/v1', apiLimiter, require('./v1'));

module.exports = router;