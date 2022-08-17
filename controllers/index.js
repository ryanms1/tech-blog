const router = require('express').Router()

const api = require('./api')
const dashboard = require('./dashboard-routes')
const home = require('./home-routes')

router.use('/', home)
router.use('/dashboard', dashboard)
router.use('/api', api)

module.exports = router