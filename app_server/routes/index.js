const express = require('express');
const router = express.Router();
const ctrLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrLocations.homeList);
router.get('/location/', ctrLocations.locationInfo);
router.get('/location/review/new', ctrLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

router.get('/plain', ctrLocations.getPlain);

module.exports = router;
