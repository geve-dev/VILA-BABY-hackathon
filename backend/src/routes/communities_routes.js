const express = require('express');
const router = express.Router();
const communitiesController = require('../controllers/communities_controllers');

router.get('/', communitiesController.FindAllCommunities);
router.get('/:id', communitiesController.FindCommunitiesById);
router.post('/', communitiesController.CreateCommunities);
router.put('/:id', communitiesController.UpdateCommunities);
router.delete('/:id', communitiesController.DeleteCommunities);

module.exports = router;