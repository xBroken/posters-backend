
const express = require('express');
const router = express.Router();
const { createEvent, getEvent } = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/:id', getEvent);

module.exports = router;
