const express = require('express');
const router = express.Router();
const emploController = require('../controllers/emplo_controllers');

router.get('/', emploController.FindAllEmployees);
router.get('/:id', emploController.FindEmployeeById);
router.post('/', emploController.CreateEmployee);
router.put('/:id', emploController.UpdateEmployee);
router.delete('/:id', emploController.DeleteEmployee);

module.exports = router;