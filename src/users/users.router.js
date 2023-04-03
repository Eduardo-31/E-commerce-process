const router = require('express').Router()
const passport = require('passport')
const { roleAdminMiddleware } = require('../middlewares/role.middleware')

const usersHttp = require('./users.http')

require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, usersHttp.getAll)


router.route('/me')    
    .get(passport.authenticate('jwt', {session: false}), usersHttp.getMyUser)
    .delete(passport.authenticate('jwt', {session: false}), usersHttp.deleteMyUser)
    .patch(passport.authenticate('jwt', {session: false}), usersHttp.updateMyUser)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, usersHttp.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, usersHttp.deleted)
    .patch(passport.authenticate('jwt', {session: false}), roleAdminMiddleware, usersHttp.update)



exports.router = router