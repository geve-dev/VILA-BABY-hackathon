const express = require('express');
const router = express.Router();
const usersController = require('../controllers/communities_controller');

router.get('/', usersController.FindAllCommunities);
router.get('/:id', usersController.FindCommunitiesById);
router.post('/', usersController.CreateCommunities);
router.put('/:id', usersController.UpdateCommunities);
router.delete('/:id', usersController.DeleteCommunities);

module.exports = router;