
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { uploadPoster } = require('../controllers/posterController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), uploadPoster);

module.exports = router;
