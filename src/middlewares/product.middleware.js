const Products = require("../models/products.model")



const verifyProduct = (req, res, next) => {
    const id = req.params.id
    
    Products.findOne({
        where: {
            id
        }
    })
    .then(response => {
        if(response){
            next()
        }else{
            return res.status(400).json({message: 'el producto al que hace referencia la imagen no existe'})
        }
    })
    .catch(err => res.status(400).json(err))


}

module.exports = {
    verifyProduct
}