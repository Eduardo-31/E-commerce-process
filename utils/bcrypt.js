const bcrypt = require('bcrypt')
const User = require('../src/models/users.model')


const hashPassword = (password) => {
    return bcrypt.hashSync(password, 10)
}

const comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}