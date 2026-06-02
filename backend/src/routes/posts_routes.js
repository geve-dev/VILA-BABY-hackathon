const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts_controllers');

router.get('/', postsController.FindAllPosts);
router.get('/:id', postsController.FindPostById);
router.post('/', postsController.CreatePost);
router.put('/:id', postsController.UpdatePost);
router.delete('/:id', postsController.DeletePost);

module.exports = router;