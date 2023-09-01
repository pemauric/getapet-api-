const router = require('express').Router();

const PetController = require('../controller/PetController');
const { imageUpload } = require('../middlewares/image-upload');

const verifyToken = require('../middlewares/verify-token');


router.get('/mypets', verifyToken, PetController.getAllUserPets)
router.get('/', PetController.getAll)
router.get('/myadoptions', verifyToken, PetController.getAllUserAdoptions)
router.post('/create', verifyToken, imageUpload.array('image'), PetController.create);



module.exports = router;

