const Carts = require("../src/models/cart.model");
const Categories = require("../src/models/categories.model");
const SubCategories = require("../src/models/subCategories.model.");
const typeCategories = require("../src/models/typeCategories.model");
const Products = require("../src/models/products.model");
const Role = require("../src/models/roles.model");
const ProductCategories = require("../src/models/productsCategories.model");
const User = require("../src/models/users.model");


const defaultValue = async() => {

    await Role.bulkCreate([
        {
            id: '04ead9a2-8aa7-48cc-a295-3fa01e60b939',
            name: 'admin'
        },
        {
            id: '1da7723f-e344-4047-921e-71bb3141ffe5',
            name: 'guest'
        },
        {
            id: '6c3face7-881c-488c-8817-8357960e9d69',
            name: 'host'
        }
    ], {validate: true})

    await User.bulkCreate([
        {
            id: "bb666215-1507-4344-90c5-10f1e21e3fd5",
            firstName: "admin",
            lastName: "admin",
            phone: "+51 123456789",
            gender: "m",
            email: "admin@gmail.com",
            password: "$2b$10$cD41YP.GMoqawP5SXXFybeCzeNleiK9nBeiU5JltyfUFnyz.HTzFO",
            roleId: "04ead9a2-8aa7-48cc-a295-3fa01e60b939",
            createdAt: "2022-12-18T01:48:18.753Z",
            updatedAt: "2022-12-18T01:48:18.753Z"
        },
        {
            id: "4b302a68-6dff-49f8-849f-e856571fd73e",
            firstName: "eduardo",
            lastName: "frabian",
            phone: "+51 123456789",
            gender: "m",
            email: "eduardo@gmail.com",
            password: "$2b$10$BMGqPaHMXG26U4.dkX2Gz.Avmff6Tm5ZNr.tjLRsJSmNgKMTPPKky",
            roleId: "1da7723f-e344-4047-921e-71bb3141ffe5",
            createdAt: "2022-12-18T01:49:17.760Z",
            updatedAt: "2022-12-18T01:49:17.760Z"
        },
        {
            id: "69d13c79-1d70-48ec-9ada-18ebf6c5d7cd",
            firstName: "host",
            lastName: "host",
            phone: "1234",
            gender: "m",
            email: "host@gmail.com",
            password: "$2b$10$BMGqPaHMXG26U4.dkX2Gz.Avmff6Tm5ZNr.tjLRsJSmNgKMTPPKky",
            roleId: "6c3face7-881c-488c-8817-8357960e9d69",
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"
        }
    ],{validate: true})

    await Categories.bulkCreate([
        {
            id: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            name: 'tecnologias',
            createdAt: '2022-12-18T01:49:35.457Z',
            updatedAt: "2022-12-18T01:49:35.457Z"
        },
        {
            id: '4d9ccc47-d7b1-4600-9124-a33e2c363e46',
            name: 'calzado',
            createdAt: '2022-12-18T01:49:35.457Z',
            updatedAt: "2022-12-18T01:49:35.457Z"
        }
    ], {validate: true})

    await Products.bulkCreate([
        {
            id: 'f9714401-abf4-40d1-a567-138df3bab9d8',
            title: 'SAMSUNG GALAXY S20',
            description: 'smartphone samsung galaxy s20 hermoso dieño',
            quantity: 50,
            status: 'active',
            //categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            price: 400,
            brand: 'sansumg',
            createdBy: '69d13c79-1d70-48ec-9ada-18ebf6c5d7cd',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        },
        {
            id: 'ad610bba-655d-42d5-9e99-bbcaf8efaf97',
            title: 'APPLE PRO MAX',
            description: 'apple pro mas diseño elgante',
            quantity: 10,
            status: 'active',
            //categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            price: 900,
            brand: 'apple',
            createdBy: '69d13c79-1d70-48ec-9ada-18ebf6c5d7cd',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        },
        {
            id: '1ebf45a4-8e70-4fcf-a9b0-f737b9dd73b9',
            title: 'APPLE 12',
            description: 'apple 12 mas diseño elgante',
            quantity: 10,
            status: 'active',
            //categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            price: 800,
            brand: 'apple',
            createdBy: '69d13c79-1d70-48ec-9ada-18ebf6c5d7cd',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        },
        {
            id: '485e3eec-fdec-498d-94c0-a835391e0267',
            title: 'Smarth TV HD 55" HDR',
            description: 'Smarth tv de 55 pulgadas',
            quantity: 30,
            status: 'active',
            //categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            price: 600,
            brand: 'nike',
            createdBy: 'bb666215-1507-4344-90c5-10f1e21e3fd5',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        },
        {
            id: '02163f76-ebf7-47c1-90c4-985fe857fb77',
            title: 'NIKE AIR FORCE ONE',
            description: 'zapatilla nike air force one modelo exclusivo',
            quantity: 30,
            status: 'active',
            //categoryId: '4d9ccc47-d7b1-4600-9124-a33e2c363e46',
            price: 600,
            brand: 'nike',
            createdBy: 'bb666215-1507-4344-90c5-10f1e21e3fd5',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        }
    ],{validate: true})

    await Carts.bulkCreate([
        {
            id: 'f1b665ee-8f9f-48ae-848e-e75f783daa10',
            quantity: 20,
            productId: 'f9714401-abf4-40d1-a567-138df3bab9d8',
            userId: '4b302a68-6dff-49f8-849f-e856571fd73e',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        },
        {
            id: '8a5a96bf-2bce-4888-82c3-b47721161434',
            quantity: 10,
            productId: '02163f76-ebf7-47c1-90c4-985fe857fb77',
            userId: '4b302a68-6dff-49f8-849f-e856571fd73e',
            createdAt: "2022-12-18T01:49:35.457Z",
            updatedAt: "2022-12-18T01:49:35.457Z"   
        }
    ],{validate: true})

    await SubCategories.bulkCreate([
        {
            id: 'bca3e972-c43d-4147-9245-0a00233d4235',
            name: 'smartphone',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072'
        },
        {
            id: 'c9eeb810-84f3-4cea-a5b1-f4be45c5dd88',
            name: 'smart tv',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072'
        },
        {
            id: '1367b04d-920d-4004-a96c-8e5da2872a69',
            name: 'hombre',
            categoryId: '4d9ccc47-d7b1-4600-9124-a33e2c363e46'
        }
    ],{validate: true})


    await typeCategories.bulkCreate([
        {
            id: '3aaad8c1-6e04-40eb-8a2f-af6335e76262',
            subCategoryId: 'bca3e972-c43d-4147-9245-0a00233d4235',
            name: 'samsung'
        },
        {
            id: 'bcf54298-7217-4883-a74f-d819fa17a92b',
            subCategoryId: 'bca3e972-c43d-4147-9245-0a00233d4235',
            name: 'apple'
        },
        {
            id: '480c00cc-1279-4aee-b047-2b99e2677e28',
            subCategoryId: 'c9eeb810-84f3-4cea-a5b1-f4be45c5dd88',
            name: 'TVs over 50'
        },
        {
            id: '6716fa7e-bd98-4abf-aba0-2282025e801b',
            subCategoryId: '1367b04d-920d-4004-a96c-8e5da2872a69',
            name: 'zapatillas urbanas'
        }
    ], {validate: true})

    await ProductCategories.bulkCreate([
        {
            id: '2d1738e2-2042-4418-95bf-d0d3cfe431b3',
            productId: 'f9714401-abf4-40d1-a567-138df3bab9d8',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            subCategoryId: 'bca3e972-c43d-4147-9245-0a00233d4235',
            typeCategoryId: '3aaad8c1-6e04-40eb-8a2f-af6335e76262'
        },
        {
            id: 'd438af24-6a37-4935-89e2-104bd21da84a',
            productId: 'ad610bba-655d-42d5-9e99-bbcaf8efaf97',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            subCategoryId: 'bca3e972-c43d-4147-9245-0a00233d4235',
            typeCategoryId: 'bcf54298-7217-4883-a74f-d819fa17a92b'
        },
        {
            id: '1ebf45a4-8e70-4fcf-a9b0-f737b9dd73b9',
            productId: '1ebf45a4-8e70-4fcf-a9b0-f737b9dd73b9',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            subCategoryId: 'bca3e972-c43d-4147-9245-0a00233d4235',
            typeCategoryId: 'bcf54298-7217-4883-a74f-d819fa17a92b'
        },
        {
            id: 'ed9fc334-701d-4be4-9b89-610c96b7f57d',
            productId: '485e3eec-fdec-498d-94c0-a835391e0267',
            categoryId: '9ce7e855-8bb9-4a0b-83b8-e455e57ca072',
            subCategoryId: 'c9eeb810-84f3-4cea-a5b1-f4be45c5dd88',
            typeCategoryId: '480c00cc-1279-4aee-b047-2b99e2677e28'
        },
        {
            id: 'e119ea7d-1146-4fd5-8b71-c0a2b2b5d33c',
            productId: '02163f76-ebf7-47c1-90c4-985fe857fb77',
            categoryId: '4d9ccc47-d7b1-4600-9124-a33e2c363e46',
            subCategoryId: '1367b04d-920d-4004-a96c-8e5da2872a69',
            typeCategoryId: '6716fa7e-bd98-4abf-aba0-2282025e801b'
        }
    ], {validate: true})


}


module.exports = {
    defaultValue
}