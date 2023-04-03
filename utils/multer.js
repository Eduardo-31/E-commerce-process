const multer = require('multer')
const uuid = require('uuid')
const path = require('path')


const addImagesProduct = () => {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '/../src/public/uploads'))
        },
        filename: (req, file, cb) => {
            cb(null, uuid.v4() + '.png')
        }
    })

    const fileFilter = (req, file, cb) => {
        console.log('hola filter')
        const filetypes = /jpeg|png|jpg/
        const minetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
        if(minetype && extname){
            return cb(null, true)
        }
        return cb('File must be a valid image', false)
    }

    const upload = multer({
        storage,
        fileFilter
    })
    return upload
}


module.exports = {
    addImagesProduct
}