const { Router } = require('express');
const userController = require('../controllers/userController');
const { checkUser } = require('../middleware/checkUser');

const router = Router();

router.post('/addShop', checkUser, userController.addShop);

module.exports = router;