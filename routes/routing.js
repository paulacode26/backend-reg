const express = require('express');
const router = express.Router();
const controller = require('../controllers/form');
router.get('/', controller.form);
router.post('/', controller.formprocess);
module.exports = router