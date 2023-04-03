const { DataTypes } = require("sequelize");
const {  db } = require("../db");
const Products = require("./products.model");
const User = require("./users.model");


const Carts = db.define('carts', {
    
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'product_id',
        references: {
            model: Products,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            model: User,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }

})

module.exports = Carts