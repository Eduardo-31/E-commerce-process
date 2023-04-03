const jwt = require('jsonwebtoken')
const { loggin } = require('./auth.controllers')

// expiresIn: "2 days"
const logginIn = async(req, res) => {
    const { email, password } = req.body
    if(email && password){
        
        try {
            const response = await loggin(email, password)
                if(response){
                    const token = jwt.sign({
                        id: response.id,
                        email: response.email,
                        role: response.roleId
                    }, 'e-commerce_dev')
                    return res.status(200).json({
                        status: 'success',
                        message: 'Correct Credentials',
                        token
                    })
                } else {
                    return res.status(401).json({
                        status: 'Unauthorized',
                        message: 'invalid credentials'
                    })
                }
        } catch (error) {
            return res.status(401).json(error)
        }

    }else {
        res.status(400).json({message: 'Missing Data'})
    }
}


module.exports = {
    logginIn
}