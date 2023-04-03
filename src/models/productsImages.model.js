const { DataTypes } = require("sequelize");
const {  db } = require("../db");
const Products = require("./products.model");


const ProductsImages = db.define('products_images', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'product_id',
        references: {
            model: Products,
            key: 'id'
        }
    }
})

module.exports = ProductsImages