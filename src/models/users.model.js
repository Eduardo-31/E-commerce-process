const { DataTypes } = require("sequelize");
const { db } = require("../db");
const Role = require("./roles.model");

const User = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(17),
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING(17),
        allowNull: false,
        field: 'last_name'
    },
    phone: {
        type: DataTypes.STRING(20)
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'role_id',
        references: {
            model: Role,
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

module.exports = User