const { assert } = require("chai")
const { describe, it } = require("mocha")
const { createProduct, getProductById, getAllProducts, deleteProduct, updateProduct } = require("../products/products.controllers.js")

const usersControllers = require('../users/users.controllers.js')


/*
describe('TEST UNITARIO DE MIS USUARIO', () => { 
    it('debe retonar mi obj con mi data', (done) => {
        
        const data = {
            password: '1234',
            roleId: 'dqwdq',
            firstName: 'test',
            lastName: 'lastname',
            email: 'test@gmail.com',
            gender: 'm',
            phone: '51 999999999'
        }  
            
      
        usersControllers.createUser(data)
            .then(fn => {               
                    assert.equal(data.firstName, fn.firstName)
                    assert.equal(data.lastName, fn.lastName)
                    assert.equal(data.gender, fn.gender)
                    assert.equal(data.email,fn.email)
                    assert.notEqual(data.roleId, fn.roleId, 'upss no es igual roleId')
                    assert.equal(data.phone, fn.phone)        
                    done()
            })
            .catch(err => done(err))
       

    })
})*/

describe('TEST UNITARIO DE MIS PRODUCTOS', () => {

   /* it('debe retornar mi product', (done) => {

        const data = {
            title: 'SAMDUNG S22',
            description: 'Samdung galaxy s22 color black',
            quantity: 5,
            categoryId: '638e44fe-75c7-48e6-b2c2-5bfe505d5413',
            price: 29938938,
            brand: 'samsung',
            id: 'dqwdqwdq',
            status: 'no'
        }
        const userId = '4b302a68-6dff-49f8-849f-e856571fd73e'
        
        createProduct(data,userId)
            .then(res => {
                console.log('PRODUCT ID',res.id)
                assert.equal(data.title, res.title)
                assert.equal(data.description, res.description)
                assert.equal(data.quantity, res.quantity)
                assert.equal(data.categoryId, res.categoryId)
                assert.equal(data.price, res.price)
                assert.equal(data.brand, res.brand)
                assert.notEqual(data.id, res.id)
                assert.equal(userId, res.userId)
                done()
            })
            .catch(err => done(err))
    })  */

    
        /*it('debe retornar mi sucess ID', (done) => {

            const data = {
                title: 'IPHONE',
                description: 'IPHONE PRO MAX color black',
                quantity: 5,
                categoryId: '638e44fe-75c7-48e6-b2c2-5bfe505d5413',
                price: 200,
                brand: 'apple',
                id: 'sss',
                status: 'no'
            }
    
            
            const idd = '8c24c29e-6365-482c-9fd1-e5397d653543'
             
            deleteProduct(idd)
                .then(res => {
                    
                    assert.equal(res, 1)
                    done()
                })
                .catch(err => done(err))
        })  
        */
        
})



