const express = require('express')
const notificationController = require('../controllers/notificationController')
const route = express.Router()

route.post('/:token', notificationController.create)

module.exports = route