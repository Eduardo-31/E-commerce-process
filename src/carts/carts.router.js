const router = require('express').Router()
const passport = require('passport')

const carthttp = require('./carts.http')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(passport.authenticate('jwt', {session: false}), carthttp.getToCart)
    .post(passport.authenticate('jwt', {session: false}), carthttp.addToCart)

router.route('/:id')
    .delete(passport.authenticate('jwt', {session: false}), carthttp.removeToCart)
    .patch(passport.authenticate('jwt', {session: false}), carthttp.updateToCart)
    
    
exports.router = router    