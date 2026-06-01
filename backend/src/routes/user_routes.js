const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/', usersController.FindAllUsers);
router.get('/:id', usersController.FindUserById);
router.post('/', usersController.CreateUser);
router.put('/:id', usersController.UpdateUser);
router.delete('/:id', usersController.DeleteUser);

module.exports = router;