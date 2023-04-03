const uuid = require('uuid')
const { hashPassword } = require('../../utils/bcrypt')
const Products = require('../models/products.model')
const Role = require('../models/roles.model')
const User  = require('../models/users.model')


const createUser = async(data) => {
    const { firstName, lastName, email, password, gender, phone } = data
    
    const newUser = await User.create({
        id: uuid.v4(),
        password: hashPassword(password),
        roleId: '1da7723f-e344-4047-921e-71bb3141ffe5',
        firstName,
        lastName,
        email,
        gender,
        phone
    })
    return newUser
}


const getAllUser = async() => {
    const users = User.findAll({
        attributes: {
            exclude: ['password', 'roleId']
        },
        include: {
            model: Role,
            attributes: {
                exclude: ['id']
            }
        }
    })
    return users
}

const getUserById = async(id) => {
    const user = await User.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['password', 'roleId']
        },
        include: {
            model: Role,
            attributes: {
                exclude: 'id'
            }
        }
    })
    return user
}

const updateUser = async(data, userId) => {

    const userRole = await User.findOne({where: {id: userId}})
    const roleAdmin = await Role.findOne({where: {name: 'admin'}})
    const { roleId, firstName, lastName, email, gender, phone, } = data
    if(userRole.roleId === roleAdmin.id){
        const response = await User.update({
            firstName,
            lastName,
            email,
            gender,
            phone,
            roleId
        },{
            where: {
                id: userId
            }
        })
        return response
    } else{
        const response = await User.update({
                firstName,
                lastName,
                email,
                gender,
                phone
            },{
                where: {
                    id: userId
                }
        })
        return response
    }

}

const deleteUser = async(id) => {
    const data =  User.destroy({
        where: {
            id
        }
    })
    return data
}





module.exports = {
    createUser,
    getAllUser,
    deleteUser,
    updateUser,
    getUserById
}