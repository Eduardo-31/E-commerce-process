const chai = require('chai')
const chaiHttp = require("chai-http")
const app = require("../app")





chai.use(chaiHttp)

describe('TEST DE MIS RUTAS', () => {


    /*it('PETICON GET /API/V1/PRODUCTS', (done) => {

        chai.request(app)
            .get('/api/v1/products')
            .end((err,res) => { 
                console.log(res.status)
                console.log(res.body)
                chai.assert.equal(res.status, 200)

                chai.assert.property(res.body, 'status')
                chai.assert.property(res.body, 'items')
                chai.assert.property(res.body, 'products')
                chai.assert.isArray(res.body.products)
                chai.assert.property(res.body.products[0],'id')
                chai.assert.property(res.body.products[0], 'title')
                chai.assert.property(res.body.products[0], 'description')
                chai.assert.property(res.body.products[0], 'quantity')
                chai.assert.property(res.body.products[0], 'status')
                chai.assert.property(res.body.products[0], 'categoryId')
                chai.assert.property(res.body.products[0], 'price')
                chai.assert.property(res.body.products[0], 'brand')
                chai.assert.property(res.body.products[0], 'userId')
                chai.assert.property(res.body.products[0], 'createdAt')
                chai.assert.property(res.body.products[0], 'updatedAt')
                done()
            })
 
    })*/


    /*it('post /api/v1/products', (done) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiNjY2MjE1LTE1MDctNDM0NC05MGM1LTEwZjFlMjFlM2ZkNSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImI0MWFlNDAzLTA5MjYtNDM0MS05NjJmLWM3MzFmOGUyZTU4YSIsImlhdCI6MTY3MDk5MDk5MH0.5RQDrfRPkullad9O2f5Oe0deXlEaQYmVSW1rYEf_WTY'
        chai.request(app)
        .post('/api/v1/products')//[]
        .set("Authorization",`JWT ${token}`)
        
        .send({
            title: 'samsung',
                description: 'samsung pro mas color yellow',
                quantity: 222,
                categoryId: '638e44fe-75c7-48e6-b2c2-5bfe505d5413',
                price: 222,
                brand: 'samsung'
            })
            .end((err, res) => {
                console.log(res.status)
                console.log(res.body)
                chai.assert.equal(res.status, 201)
                done()
            })
    })*/


    /*it('delete /api/v1/products', (done) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiNjY2MjE1LTE1MDctNDM0NC05MGM1LTEwZjFlMjFlM2ZkNSIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImI0MWFlNDAzLTA5MjYtNDM0MS05NjJmLWM3MzFmOGUyZTU4YSIsImlhdCI6MTY3MDk5MDk5MH0.5RQDrfRPkullad9O2f5Oe0deXlEaQYmVSW1rYEf_WTY'
        chai.request(app)
        .delete('/api/v1/products/c02127b7-0d24-4679-a784-c3165df5a675')//[]
        //.set("Authorization",`JWT ${token}`)
            .end((err, res) => {
                console.log(res.status)
                console.log(res.body)
                chai.assert.equal(res.status, 204)
                done()
            })
    })*/


   /*it('patch /api/v1/products/:id', (done) => {
       //message: 'your request was successful'
       const id = 'fe3318da-b88f-4f7e-9c27-718f6dca06f5'
    chai.request(app)
        .patch(`/api/v1/products/${id}`)
        .send({
            title: 'SUPREME',
            description: 'UN CELULAR 24/7',
            price: 5,
            quantity: 0,
            status: "no",
            categoryId: "638e44fe-75c7-48e6-b2c2-5bfe505d5499",
            brand: "tesla",
            userId: "bb666215-1507-4344-90c5-10f1e21e3fd0",
        })
        .end((err, res) => {
            console.log('PATCH PRODUCT PETICION')
            console.log(res.status)
            console.log(res.body)
            chai.assert.equal(res.status, 200)
            chai.assert.equal(res.body.message, 'your request was successful')
            chai.assert.property(res.body, 'status')
            chai.assert.property(res.body, 'message')

            chai.request(app)
                .get(`/api/v1/products/${id}`)
                .end((err, res) => {
                    console.log('GET PRODUCT PETICION')
                    console.log(res.status)
                    console.log(res.body)
                    chai.assert.equal(res.status, 200)
                    chai.assert.equal(res.body.status, 'success')
                    chai.assert.equal(res.body.product.title, 'SUPREME')
                    chai.assert.equal(res.body.product.description, 'UN CELULAR 24/7')
                    chai.assert.equal(res.body.product.price, 5)
                    chai.assert.equal(res.body.product.quantity, 0)
                    done()
                })
        })
   })*/



})