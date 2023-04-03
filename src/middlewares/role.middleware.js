const Role = require("../models/roles.model")

const roleAdminMiddleware = (req, res, next) => {
        Role.findOne({
            where: {
                name: 'admin'
            }
        })
        .then(response => {
            console.log('RESPONSEEE',req.user.role, response.id)
            if(response.id === req.user.role){
                next()
            }else{
                res.status(401).json({message: 'Unauthorized'})
            }
        })
        .catch(err => {
            res.status(401).json({
                status: 'error',
                message: 'User not authorized to make this request'
            })
        })
}

const roleHostMiddleware = (req, res, next) => {
    Role.findOne({
        where: {
            name: 'host'
        }
    })
        .then(response => {
            if(response.id === req.user.role){
                next()
            }else{
                res.status(401).json({message: 'Unauthorized'})
            }
        })
        .catch(err => {
            res.status(401).json({
                status: 'error',
                message: 'User not authorized to make this request'
            })
        })
}
const roleAdminAndhostMiddleware = (req, res, next) => {
        Role.findAll({
            where: {
                name: ['admin','host']
            }
        })
        .then(response => {
            if(response[0].id === req.user.role || response[1].id === req.user.role){
                next()
            }else{
                res.status(401).json({message: 'Unauthorized'})
            }
        })
        .catch(err => {
            res.status(401).json({
                status: 'error',
                message: 'User not authorized to make this request'
            })
        })
}


module.exports = {
    roleAdminMiddleware,
    roleHostMiddleware,
    roleAdminAndhostMiddleware
}