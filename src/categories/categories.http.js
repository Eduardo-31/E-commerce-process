const { HOST } = require('../../utils/config')
const categoriesControllers = require('./categories.controllers')


const create = async(req, res) => {

    const { name } = req.body

    if(!name){
        return res.status(400).json({
            status: 'error',
            message: 'name field required',
            name: 'string'
        })
    }else{
        try {
            const response = await categoriesControllers.createCategory(name.toLowerCase())
                return res.status(201).json({
                    status: 'success',
                    category: response
                })
        } catch (error) {
            return res.status(400).json({message: error.message, error})
        }
    }

}

const getAll = async(req, res) => {


    try {
        const categories = await categoriesControllers.getAllCategories()
        

        return res.status(200).json({
            status: 'success',
            items: categories.length,
            categories
            
        })
    } catch (error) {
        return res.status(400).json(error)
    }

}



const getById = async(req, res) => {
    const { id } = req.params
    //const offset = req.query.offset || 0
    //const limit = req.query.limit || 2
    const offset = Number(req.query.offset) || 0
    // offset: donde inicia
    const limit = Number(req.query.limit) || 2

    
    const baseUrl = `${HOST}/api/v1/categories/${id}/products`
    
    try {
        const response = await categoriesControllers.getCategoryById(id, offset, limit)
        
        
        if(response.categories){
            
            //const nextPage = category.categoriesProducts.length < offset ? null : `${baseUrl}?offset=${offset + limit}&limit=${limit}`
            
            //  offset = 0
            // limit   = 5
            //  products = 21
            //


            //const nextPage = offset + limit <= category.categoriesProducts.length 

           

            const products = response.categoriesProducts.count
                
            const nextPage =  offset + limit < products ? `${baseUrl}?offset=${offset + limit}&limit=${limit}` : null
    
            const prevPage = offset - limit >= 0 ? `${baseUrl}?offset=${offset - limit}&limit=${limit}` : null
               
                return res.status(200).json({
                    category: response.categories,
                    //cate,
                    offset,
                    limit,
                    nextPage,
                    prevPage,
                    items: products,
                    product: response.categoriesProducts.rows
                })
            }else{
                return res.status(400).json({
                    status: 'error',
                    message: 'Invalid ID'
                })
            }
    } catch (error) {
        return res.status(400).json({message: error.message, error})
    }
}



module.exports = {
    create,
    getAll,
    getById
}