const express = require('express');

let router = express.Router();

let tempControllers = require('../controllers/tempControllers');

router.get('/',tempControllers.getIndex);

router.get('/add-temp',tempControllers.getAddTemp);

router.post('/add-temp',tempControllers.postAddTemp);

router.get('/edit-temp/:tempId',tempControllers.getEditTemp);

router.post('/edit-temp',tempControllers.postEditTemp);

router.post('/delete',tempControllers.postDeleteTemp);

module.exports = router;