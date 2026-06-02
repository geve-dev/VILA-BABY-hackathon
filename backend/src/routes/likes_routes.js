const express = require('express');
const router = express.Router();

const LikeController = require('../controllers/likes_controllers');

router.post('/toggle', LikeController.ToggleLike);

module.exports = router;