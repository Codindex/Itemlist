let express = require('express');

let router = express.Router();

let itemController = require('./controllers/itemController');

router.get('/', (req, res) => res.redirect('/items'));

router.get('/items', itemController.itemList);

router.get('/items/new', itemController.itemNew);
router.post('/items', itemController.itemSave);

router.get('/items/delete/:iditem', itemController.itemDelete);
router.get('/items/paid/:iditem', itemController.itemPaid);

module.exports = router;