const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Categories = require("./categories.model");


const SubCategories = db.define('sub_categories', {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Categories,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},
{
    timestamps: false
})

module.exports = SubCategories