const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Products = require("./products.model");
const Categories = require("./categories.model");
const CategoriesType = require("./typeCategories.model");
const SubCategories = require("./subCategories.model.");


const ProductCategories = db.define('products_categories', {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
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
    categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'category_id',
        references: {
            model: Categories,
            key: 'id'
        }
    },
    subCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'sub_category_id',
        references: {
            model: SubCategories,
            key: 'id'
        }
    },
    typeCategoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'category_type_id',
        references: {
            model: CategoriesType,
            key: 'id'
        }
    }
},{
    timestamps: false
})


module.exports = ProductCategories