var express = require('express');
var router = express.Router();
const eventController = require('../controllers/events');

// Routes related to event
router.get('/', eventController.getAllEvents);
/*router.get('/addevent', eventController.addEvent);*/
router.post('/',eventController.addEvent);
router.get('/actors/:actorId', eventController.getByActor);

module.exports = router;