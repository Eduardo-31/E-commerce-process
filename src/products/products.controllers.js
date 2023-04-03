const uuid = require('uuid')
const { HOST } = require('../../utils/config')
const Categories = require('../models/categories.model')
const Products = require('../models/products.model')
const ProductCategories = require('../models/productsCategories.model')
const ProductsImages = require('../models/productsImages.model')
const Role = require('../models/roles.model')
const SubCategories = require('../models/subCategories.model.')
const typeCategories = require('../models/typeCategories.model')
const User = require('../models/users.model')



const getAllProducts = async(offset, limit) => {

    const products = await Products.findAndCountAll({
        offset,
        limit,
        include: [
            {
                model: ProductsImages
            },
            {
                model: ProductCategories,
                as: 'category',
                attributes: ['id'],
                include: [
                    {
                        model: Categories,
                        attributes: ['id', 'name']
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
        ]
    })

    return products
}


const createProduct = async(data, createdBy) => {
    const { title, description, quantity, categoryId, price, brand } = data
    const newProduct = await Products.create({
        id: uuid.v4(),
        status: 'active',
        createdBy,
        title,
        description,
        quantity,
        categoryId,
        price,
        brand
    })
    return newProduct
}

const getProductById = async(id) => {
    const product = await Products.findOne({
        where: {
            id
        },
        include: [
            {
                model: ProductsImages,
                attributes: {
                    exclude: ['productId']
                }
            },
            {
                model: ProductCategories,
                as: 'category',
                attributes: ['categoryId'],
                include: [
                    {
                        model: Categories,
                        attributes: ['id', 'name']
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
        ]
    })

    return product
}

const deleteProduct = async(id) => {
    const deletedProduct = await Products.destroy({
        where: {
            id
        }
    })
    return deletedProduct
}

const updateProduct = async(data, id) => {
    const { quantity, price, description, title } = data

    const product = await Products.update({
        quantity,
        price,
        description,
        title
    },{
        where: {
            id
        }
    })

    return product

}

const addPicture = async(id, files) => {

        console.log(files)
        console.log(files.length)

        let array = []

        for(let i = 0; i < files.length; i++){

            const obj =   {
                id: uuid.v4(),
                productId: id,
                url: HOST + '/upload/' + files[i].filename
            };
            array.push(obj)
        }
        
        const picture = await ProductsImages.bulkCreate(array)
        return picture



}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
    addPicture
}