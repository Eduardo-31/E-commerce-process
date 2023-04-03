const cartsControllers = require('.//carts.controllers')


const getToCart = async(req, res) => {
    const { id } = req.user
        try {
            const cart = await cartsControllers.getCartByUser(id)
            return res.status(200).json({
                status: 'succes',
                results: cart
            })
        } catch (error) {
            return res.status(400).json(error)
        }
}


const addToCart = async(req, res) => {

    const userId = req.user.id
    const data = req.body

    if(!Object.keys(data).length){
        return res.status(400).json({
            status: 'error',
            message: 'Missing Data'
        })
    }
    
    if(!data.quantity  || !data.id){
        return res.status(400).json({
            status: 'error',
            message: 'All fields are required',
            id: 'uuid',
            quantity: 'number integer'
        })
    }else{
        try {
            const response = await cartsControllers.addProductToCart(userId, data)
            return res.status(201).json({
                status: 'success',
                cart: response
            })
        } catch (error) {
            console.log(data)
            console.log('ERRRROR',error.message)
            return res.status(400).json({message: error.message})
        }
    }
}


const updateToCart = async(req, res) => {

    const userId = req.user.id
    const { id } = req.params
    const { quantity } = req.body


    if(!quantity){
        return res.status(400).json({
            status: 'error',
            message: 'quantity field required'
        })
    }else{
        try {
            const response = await cartsControllers.updateCartByUser(userId, id, quantity)
            // response retorna un array
            // si se modifico con exito retorna 1 dentro del array   = [1]
            // si el id no existe retorna 0 dentro del array   = [0]
                if(response[0]){
                    return res.status(200).json({
                        status: 'success'
                    })
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



}


const removeToCart = async(req, res) => {
    const userId = req.user.id
    const { id } = req.params
    try {
        const response = await cartsControllers.removeProducFromCart(userId, id)
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


module.exports = {

    getToCart,
    addToCart,
    updateToCart,
    removeToCart

}