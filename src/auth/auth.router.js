const router = require('express').Router()
const { logginIn } = require('./auth.http')
const { register } = require('../users/users.http')
 
router.post('/loggin', logginIn)
router.post('/register', register)

exports.router = router