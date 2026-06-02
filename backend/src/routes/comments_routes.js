const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments_controllers');

router.get('/', commentsController.FindAllComments);
router.get('/:postId', commentsController.FindCommentByPostId);
router.post('/', commentsController.CreateComment);
router.delete('/:id', commentsController.DeleteComment);

module.exports = router;