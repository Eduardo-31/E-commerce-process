const productsControllers = require('./products.controllers')
const multer = require('multer')

const { HOST } = require('../../utils/config')
const { addImagesProduct } = require('../../utils/multer')

const getAll = async(req, res) => {


    const offset = Number(req.query.offset) || 0
    // offset: donde inicia
    const limit = Number(req.query.limit) || 2
    // limit: Cantidad maxima de entidades a mostrar por pagina

    const baseUrl = `${HOST}/api/v1/products`
   
    //count 13
    //offset 10
    //limit 3

    try {
        const response = await productsControllers.getAllProducts(offset, limit)

        //const nexPage =  response.count - offset >= limit ? `${baseUrl}?offset=${offset + limit}&limit=${limit}` : null
        const nexPage =  offset + limit < response.count ? `${baseUrl}?offset=${offset + limit}&limit=${limit}` : null

        const prevPage = offset - limit >= 0 ? `${baseUrl}?offset=${offset - limit}&limit=${limit}` : null

        return res.status(200).json({
            status: 'success',
            offset,
            limit,
            nexPage,
            prevPage,
            items: response.count,
            products: response.rows
        })
    } catch (error) {
        return res.status(400).json(error)
    }

}

const getById = async(req, res) => {

    const { id } = req.params

        try {
            const response = await productsControllers.getProductById(id)
            if(response){
                return res.status(200).json({
                    status: 'success',
                    product: response
                })
            }else{
                return res.status(404).json({
                    status: 'error',
                    message: 'Invalid ID'
                })
            }
        } catch (error) {
            return res.status(400).json(error)   
        }

}

const register = async(req, res) => {

    const { id } = req.user
    const data = req.body

    if(!Object.keys(data).length){
        return res.status(400).json({
            status: 'error',
            message: 'Missing Data'
        })
    }else if(
        data.title &&
        data.description &&
        data.quantity &&
        data.categoryId &&
        data.price &&
        data.brand 
    ){
        try {
            const response = await productsControllers.createProduct(data, id)
            return res.status(201).json({
                status: 'success',
                product: response
            })
        } catch (error) {
            return res.status(400).json(error)
        }
    }else{
        return res.status(400).json({
            status: 'error',
            message: 'All fields must be completed',
            title: 'string',
            description: 'string',
            quantity: 'number',
            categoryId: 'uuid',
            price: 'number',
            brand: 'string'
        })
    }


}


const deleted = async(req, res) => {

    const { id } = req.params
    try {
        const response = await productsControllers.deleteProduct(id)
        if(response){
            return res.status(204).json()
        }else{
            return res.status(400).json({
                status: 'error',
                message: 'Invalid ID'
            })
        }
    } catch (error) {
        return res.status(400).json(error)
    }

}

const update = async(req, res) => {

    const { id } = req.params
    const data = req.body

    if(!Object.keys(data).length){
        return res.status(400).json({
            status: 'error',
            message: 'Missing Data'
        })
    }else if(
        data.title ||
        data.price ||
        data.description ||
        data.quantity
    ){

        try {
            const response = await productsControllers.updateProduct(data, id)
            // response retorna un array
            // si se modifico con exito retorna 1 dentro del array   = [1]
            // si el id no existe retorna 0 dentro del array   = [0]
            if(response[0]){
                return res.status(200).json({
                    status: 'success',
                    message: 'your request was successful'
                })
            }else{
                return res.status(400).json({
                    status: 'error',
                    message: 'Invalid ID'
                })
            }
        } catch (error) {
            return res.status(200).json(error)
        }
    }


}



const upload = addImagesProduct().array('image', 3)
const postPicture = async(req, res) => {

    const { id } = req.params
    //  return res.status(200).json(req.files)
    upload(req, res, async(err) => {
        if (err instanceof multer.MulterError) {
            // Un error de Multer ocurrió durante la subida.
            return res.status(400).json({message: 'File must be a valid image', err})
        } else if (err) {
            // Un error desconocido ocurrió durante la subida.
            return res.status(400).json({message: 'File must be a valid image', err})
        }
        try {
             

                productsControllers.addPicture(id, req.files)
                return res.status(200).send('se creo la imagen exitosamente')
            
        } catch (error) {
            console.log('catch')
            return res.status(400).json(error)
        }
            // Todo salió bien.
        })
      


}





module.exports = {
    getAll,
    getById,
    register,
    deleted,
    update,
    postPicture
}