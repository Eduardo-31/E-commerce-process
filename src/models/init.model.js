const Role = require("./roles.model")
const Categories = require("./categories.model")
const User = require("./users.model")
const Products = require("./products.model")
const Carts = require("./cart.model")
const SubCategories = require("./subCategories.model.")
const typeCategories = require("./typeCategories.model")
const ProductsImages = require("./productsImages.model")
const ProductCategories = require("./productsCategories.model")




const initModel = () => {

    // belongTo = pertenece a
    // belongToMany = pertenecen a muchos
    // hasOne   = tiene uno
    // hasMany  = tiene muchos
    // A.hasOne(B)
    // has hace referencia cuando en el B existe la llave foranea
    // A.belongsTo(B)
    // belongs hace referencia cuando en A existe la llave foranea

    //User.belongsTo(Role/*,{ foreignKey: {name: "role_id", allowNull:false}}*/)
    //Role.hasMany(User)

    Role.hasMany(User)
    User.belongsTo(Role)

    //User.hasMany(Products, {foreignKey: 'userId'})
    //Products.belongsTo(User, {foreignKey: 'userId'})
    
    
    //User.belongsToMany(Products, { through: Carts, foreignKey: 'userId'})
    //Products.belongsToMany(User, { through: Carts, foreignKey: 'productId'})

    Products.hasMany(ProductsImages)
    ProductsImages.belongsTo(Products)

    User.hasMany(Carts)
    Carts.belongsTo(User)

    Products.hasMany(Carts)
    Carts.belongsTo(Products)

    

    
    //Categories.hasMany(Products)
    //Products.belongsTo(Categories)
    



    Products.belongsToMany(Categories, { through: ProductCategories})
    Categories.belongsToMany(Products, { through: ProductCategories})
    
    

    //SubCategories.belongsToMany(typeCategories,{ through: ProductCategories, foreignKey: 'title'})
    //typeCategories.belongsToMany(SubCategories,{ through: ProductCategories, foreignKey: 'categoryTypeId'})

    //Products.belongsToMany(SubCategories, { through: ProductCategories})
    //SubCategories.belongsToMany(Products, { through: ProductCategories})

    
    Products.hasMany(ProductCategories, { as: 'category', foreignKey: 'productId'})
    ProductCategories.belongsTo(Products)
    
    Categories.hasMany(ProductCategories, { foreignKey: 'categoryId'})
    ProductCategories.belongsTo(Categories) 


    //Products.hasMany(typeCategories)
    //typeCategories.belongsTo(Products)
   

    SubCategories.hasMany(ProductCategories , { as: 'subCategory', foreignKey: 'subCategoryId'})
    ProductCategories.belongsTo(SubCategories , { as: 'subCategory', foreignKey: 'subCategoryId'})

    typeCategories.hasMany(ProductCategories, { as: 'typeCategory', foreignKey: 'typeCategoryId'})
    ProductCategories.belongsTo(typeCategories, {as: 'typeCategory',  foreignKey: 'typeCategoryId'})

    
    

    Categories.hasMany(SubCategories, { as: 'subCategories', foreignKey: 'categoryId'})
    SubCategories.belongsTo(Categories)//, { as: 'subCategories', foreignKey: 'categoryId'})

    SubCategories.hasMany(typeCategories, { as: 'typeCategories', foreignKey: 'subCategoryId'})
    typeCategories.belongsTo(SubCategories)//, { as: 'typeCategories', foreignKey: 'subCategoryId'})
    
}


module.exports = initModel