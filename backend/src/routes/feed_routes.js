const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feed_controllers');

router.get('/', feedController.GetFeed);

module.exports = router;