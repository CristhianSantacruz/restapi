const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/items', authenticateToken, itemController.createItem);
router.get('/items',authenticateToken, itemController.getAllItems);
router.get('/hello',itemController.saludarHello);
router.get('/items/:id',authenticateToken, itemController.getItem);
router.put('/items/:id',authenticateToken, itemController.updateItem);
router.delete('/items/:id',authenticateToken, itemController.deleteItem);

module.exports = router;