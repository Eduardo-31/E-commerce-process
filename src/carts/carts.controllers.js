const uuid = require('uuid')
const Carts = require("../models/cart.model")
const Categories = require('../models/categories.model')
const Products = require('../models/products.model')
const ProductCategories = require('../models/productsCategories.model')
const Role = require('../models/roles.model')
const SubCategories = require('../models/subCategories.model.')
const typeCategories = require('../models/typeCategories.model')
const User = require('../models/users.model')



const getCartByUser = async(id) => {

    /*const cart = await Carts.findAll({
        where: {
            userId: id
        },
    })*/
    /*const cart = await Carts.findAll({
        
        where: {
            userId: id
        },
        include: [
            {
                model: Products
            },
            {
                model: User
               
            }
        ]

    })*/
    const cart = await User.findOne({
        
        where: {
            id
        },
        attributes: {
            exclude: ['password','roleId']
        },
        include: [
            {
                model: Role,
                attributes: ['name']
            },
            {
                model: Carts,
                attributes: {
                    exclude: ['userId']
                },
                include:
                {
                    model: Products,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'userId']
                    },
                    include: {
                        model: ProductCategories,
                        as: 'category',
                        attributes: ['id'],
                        include: [
                            {
                                model: Categories,
                            },
                            {
                                model: SubCategories,
                                as: 'subCategory',
                                attributes: ['id', 'name']
                            },
                            {
                                model: typeCategories,
                                as: 'typeCategory',
                                attributes: ['id', 'name']
                            }
                        ]
                    }
                }
            }
        ]

    })
    return cart
}

const addProductToCart = async(userId, data) => {

    const { id, quantity} = data
    console.log(data)
        const cartProduct = await Carts.create({
            id: uuid.v4(),
            userId,
            quantity,
            productId: id
        })

        return cartProduct

}


const removeProducFromCart = async(userId, id) => {
    const remove = await Carts.destroy({
        where: {
            id,
            userId
        }
    })
    return remove
}


const updateCartByUser = async(userId, id, quantity) => {
    const update = await Carts.update({
        quantity
    },{
        where: {
            id,
            userId
        }
    })
    return update
}


module.exports = {
    getCartByUser,
    addProductToCart,
    removeProducFromCart,
    updateCartByUser
}