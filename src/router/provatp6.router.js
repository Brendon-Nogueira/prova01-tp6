const express = require('express')
const router = express.Router()
const controller = require('../controller/provatp6.controller')

router.get('/', controller.getAll)
router.get('/api/movies/:id', controller.getById)
router.post('/api/movies', controller.create)
router.put('/api/movies/:id', controller.update)
router.delete('/api/movies/:id', controller.remove)

module.exports = router