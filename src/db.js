const { Sequelize } = require("sequelize");



const db = new Sequelize('e-commerce_portafolio_tech_shop', 'postgres', '2022', {
    host: 'localhost',
    dialect: 'postgres'
})
/*
const db = new Sequelize({ 
    dialect: 'postgres', 
    host: process.env.DB_HOST, // localhost
    username: process.env.DB_USER,  // postgres
    password: process.env.DB_PASSWORD,  // 2022
    database: process.env.DB,  // e-commerce
    logging: false,
    dialectOptions:
      process.env.NODE_ENV === 'production'
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
  })
  */
  module.exports = { db }