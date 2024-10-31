const express = require('express');
const { getUserInfoHandler } = require('./controller');

const router = express.Router();

router.get('api/whoami', getUserInfoHandler);

module.exports = router;
