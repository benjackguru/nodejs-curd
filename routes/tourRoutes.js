const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkID);

router.route('/').post(tourController.createTour);
module.exports = router;
