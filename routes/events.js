const express = require('express')
const router = express.Router()
const Event = require('../controllers/events')

// router.post('/create', Event.createEvent)

// router.get('/get', Event.getEvents)

router.get('/:id', Event.getID)


module.exports = router
