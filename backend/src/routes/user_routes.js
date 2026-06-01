const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/users', usersController.FindAllUsers);
router.get('/users/:id', usersController.FindUserById);
router.post('/users', usersController.CreateUser);
router.put('/users/:id', usersController.UpdateUser);
router.delete('/users/:id', usersController.DeleteUser);

module.exports = router;