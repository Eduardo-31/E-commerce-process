const uuid = require('uuid')
const Categories = require('../models/categories.model')
const SubCategories = require('../models/subCategories.model.')
const typeCategories = require('../models/typeCategories.model')
const Products = require('../models/products.model')
const ProductCategories = require('../models/productsCategories.model')
const { HOST } = require('../../utils/config')




const getAllCategories = async() => {
    const categories = await Categories.findAll({
        include: {
            model: SubCategories,
            as: 'subCategories',
            attributes: {
                exclude: ['categoryId']
            },
            include: {
                model: typeCategories,
                as: 'typeCategories',
                attributes: {
                    exclude: ['subCategoryId']
                }
            }
        }
    })

    const baseUrl = `${HOST}/api/v1/categories`
    categories.map(item => {
        item.dataValues.url = `${baseUrl}/${item.id}/products`
        item.subCategories.map(sub => {
            sub.dataValues.url = `${baseUrl}/${item.id}/subcategories/${sub.id}/products`
            sub.typeCategories.map(type => {
                type.dataValues.url = `${baseUrl}/${item.id}/subcategories/${sub.id}/type/${type.id}/products`
            })
        })
    })


    return categories
}


//const getAllCategories = async() => {
    //const categories = await Categories.findAll() 

    /*const categories = await Categories.findAll({

            include: {
                //model: ProductCategories,
                //attributes: {
                  //  exclude: ['productId', 'categoryId', 'createdAt', 'updatedAt']
                //},
                
                    model: Products,
                   
                   
            },
        
    }) */
    /*const categories = await Categories.findAll({
        include: [{
            model: Products
        },{
            model: SubCategories,
            include: {
                model: ProductCategories
                
            }

        }]
            
        
    }) */
    /*const categories = await Categories.findAll({
            where: {
                id: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072'
            },
            include: {
                model: SubCategories,
                include: {
                    model: ProductCategories,
                    include: {
                        model: Products
                    }
                },
                
            }
        
    }) 

    return categories
}*/

const getCategoryById = async(id, offset, limit) => {

    /*const categories = await Categories.findAll({
        where: {
            id,
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        },
        
        include: [{
            model: Products,
            
            
            through: {
                attributes: [],
            },
            
            include: {
                model: ProductCategories,
                as: 'category',
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
                ],
                attributes: ['categoryId'],
            }
        }],
        
    })*/

    const categories = await Categories.findOne({
       where: {
        id
       },
       include: {
        model: SubCategories,
        as: 'subCategories',
        attributes: {
            exclude: ['categoryId']
        },
        include: {
            model: typeCategories,
            as: 'typeCategories',
            attributes: {
                exclude: ['subCategoryId']
            }
        }
       }
       
    })



    const categoriesProducts = await Products.findAndCountAll({
        
        
      
        include: [{
            model: ProductCategories,
            as: 'category',
            where: {
                categoryId: id,
            },
            include: [
                {
                    model: Categories,
                    attributes: ['id', 'name'],
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
            ],
            attributes: ['id'],
        }],
        offset,
        limit,

    })

    categories.subCategories.map(item => {
        console.log(item.dataValues.id)
        
        item.dataValues.url = `${HOST}/api/v1/categories/${categories.id}/subcategories/${item.id}/products`
        item.typeCategories.map(type => {
            
            type.dataValues.url = `${HOST}/api/v1/categories/${categories.id}/subcategories/${item.id}/type/${type.id}/products`
            
        })
    })

  

    const result = {
        categories,
        categoriesProducts
    }

    return result
}








const createCategory = async(name) => {
    const category =  await Categories.create({
        id: uuid.v4(),
        name
    })
    return category
}


module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById
}
