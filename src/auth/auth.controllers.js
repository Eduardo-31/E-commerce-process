const { comparePassword } = require("../../utils/bcrypt")
const User = require("../models/users.model")



const loggin = async(email, password) => {
    
    const user = await User.findOne({
        where: {
            email
        }
    })  
        if(user){
            const verify_password = comparePassword(password, user.password)
            if(verify_password){
                return user
            }
        }
        return false
   
}

module.exports = {
    loggin
}