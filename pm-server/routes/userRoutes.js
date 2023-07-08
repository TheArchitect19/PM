const { Router } = require('express');
const { addShop, saveProfile, saveProfilePic, getUserInfo, changePassword, updateNumber, uploadProduct } = require('../controllers/userController');
const { checkUser } = require('../middleware/checkUser');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post('/addShop', checkUser, addShop);
router.post('/saveProfile', checkUser, saveProfile);
router.get('/getUserInfo', checkUser, getUserInfo);
router.post('/changePassword', checkUser, changePassword);
router.post('/updateNumber', checkUser, updateNumber);
router.post('/saveProfilePic', checkUser, upload.single('file'), saveProfilePic);
router.post('/uploadProduct', checkUser, upload.array('files'), uploadProduct);

module.exports = router;