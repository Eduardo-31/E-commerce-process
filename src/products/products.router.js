const router = require('express').Router()
const passport = require('passport')
const { verifyProduct } = require('../middlewares/product.middleware')

const productshttp = require('./products.http')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(productshttp.getAll)
    .post( productshttp.register)

router.route('/:id')
    .get(productshttp.getById)
    .delete( passport.authenticate('jwt', {session: false}) , productshttp.deleted)
    .patch( passport.authenticate('jwt', {session: false}) , productshttp.update)

router.post('/:id/picture', verifyProduct ,productshttp.postPicture)



exports.router = router