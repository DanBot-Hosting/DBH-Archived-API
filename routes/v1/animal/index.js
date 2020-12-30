const router = require('express').Router();

router.use('/cat', require('./cat'));
router.use('/dog', require('./dog'));

module.exports = router;