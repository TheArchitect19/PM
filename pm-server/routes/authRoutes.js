const { Router } = require('express');
const authController = require('../controllers/authController');
const { checkUser } = require('../middleware/checkUser');

const router = Router();

router.post('/signup', authController.signup);
router.post('/savePassword', authController.savePassword);
router.post('/login', authController.login);
router.post('/checkPhoneExists', authController.checkPhoneExists);
router.get('/checkLogin', authController.checkLogin);

module.exports = router;
