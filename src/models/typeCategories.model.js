const { DataTypes } = require("sequelize");
const { db } = require("../db");
const SubCategories = require("./subCategories.model.");

const typeCategories = db.define('types_categories', {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    subCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: SubCategories,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{
    timestamps: false
})


module.exports = typeCategories