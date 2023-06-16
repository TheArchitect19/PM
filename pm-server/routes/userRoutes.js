const { Router } = require('express');
const { addShop, saveProfile, saveProfilePic } = require('../controllers/userController');
const { checkUser } = require('../middleware/checkUser');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post('/addShop', checkUser, addShop);
router.post('/saveProfile', checkUser, saveProfile);
router.post('/saveProfilePic', checkUser, upload.single('file'), saveProfilePic);

module.exports = router;