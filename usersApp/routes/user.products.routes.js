const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user.product.controller');

router.get('/', userProductController.findAll);
router.get('/:username', userProductController.findOne);
router.post('/', userProductController.findAll)
router.patch('/:username', userProductController.update);
router.delete('/:username/products/:d', userProductController.delete);

module.exports = router;