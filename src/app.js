const express = require('express')
const { defaultValue }  = require('../utils/defaultValue.js')
const {db} = require('./db.js')
const initModel = require('./models/init.model.js')
const Role = require('./models/roles.model.js')
const path = require('path')
const cors = require('cors')


const app = express()
const multer = require('multer')
const { addImagesProduct } = require('../utils/multer.js')

// routers
const users = require('./users/users.router').router
const auth = require('./auth/auth.router').router
const products = require('./products/products.router').router
const categories = require('./categories/categories.router').router
const cart = require('./carts/carts.router').router


app.use(cors())

initModel()

    db.sync()
    .then(res => {
            //console.log(defaultValue)
            //defaultValue()
            console.log('syncronizado')
        })
    .catch(err => console.log(err))



// Esta configuracion es para habilitar el manejo del req.body
app.use(express.json())

    app.use('/api/v1/auth', auth)
    app.use('/api/v1/users', users)
    app.use('/api/v1/products', products)
    app.use('/api/v1/categories', categories)
    app.use('/api/v1/cart', cart)

    app.use(express.static('frontend'))


        

    app.use('/form/data', (req, res) => {
        
        console.log(path.resolve('frontend/index.html') )
        const ruta = path.resolve('frontend/index.html')
        res.sendFile(ruta)
    })


    
    
    //const upload = multer({dest: 'uploads'}).single('uploaded_file') 
    
    //const  op = upload.fields([{ name: 'avatar', maxCount: 2 }, { name: 'gallery', maxCount: 8 }])
    /*app.post('/upload' ,(req, res) => {
        const file = req.file
        
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
              // Un error de Multer ocurrió durante la subida.
              return res.status(400).json({message: 'err instanceof multer'})
            } else if (err) {
              // Un error desconocido ocurrió durante la subida.
              return res.status(400).json({message: 'err desconocido durante la subida'})
            }
            return res.status(200).json(req.file)
            // Todo salió bien.
          })

    })*/

    /*app.post('/upload', (req, res) => {
      const upload = addImagesProduct().array('image', 3)
      //  return res.status(200).json(req.files)
      upload(req, res, (err) => {
            if (err instanceof multer.MulterError) {
              // Un error de Multer ocurrió durante la subida.
              return res.status(400).json({message: 'File must be a valid image', err})
            } else if (err) {
              // Un error desconocido ocurrió durante la subida.
              return res.status(400).json({message: 'File must be a valid image', err})
            }
            return res.status(200).json(req.files)
            // Todo salió bien.
          })
    })*/


    //app.use(express.static(path.join(__dirname, 'public')))

    app.get('/upload/:id', (req, res) => {
      const id = req.params.id
      const image = path.join(__dirname, 'public/uploads', id)

          return res.status(200).sendFile(image)
 
    })


    

    //app.use('/form/data',express.static(path.resolve('frontend/index.html')));

    app.get('/api/v1/roles', async(req, res) => {
        try {
            const roles = await Role.findAll()
            return res.status(200).json(roles)
        } catch (error) {
            return res.status(400).json(error)
        }
    })


    

app.listen(8000, () => {
    console.log('server started and port 8000')
})


module.exports = app