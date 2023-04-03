const router = require('express').Router()
const passport = require('passport')
const { roleAdminAndhostMiddleware } = require('../middlewares/role.middleware')


//services
const categoriesHttp = require('./categories.http')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get( categoriesHttp.getAll)
    .post(passport.authenticate('jwt', {session: false}), roleAdminAndhostMiddleware, categoriesHttp.create)

router.get('/:id/products', categoriesHttp.getById)    

exports.router = router
// export router en un obj
