const { DataTypes } = require("sequelize");
const { db } = require("../db");


const Role = db.define('roles', {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(17),
        allowNull: false,
        unique: true
    }
},{
    timestamps: false
})

module.exports = Role
