const usersControllers = require('./users.controllers')


const getAll = async(req, res) => {
    try {
        const data = await usersControllers.getAllUser()
        return res.status(200).json({
            status: 'success',
            items: data.length,
            users: data
        })
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

const getById = async(req, res) => {
    const { id } = req.params
    try {

        const response = await usersControllers.getUserById(id)
            if(response){
                return res.status(200).json(response)
            }else{
                return res.status(404).json({ message: 'invalid ID'})
            }

    } catch (error) {
        return res.status(400).json(error)
    }
}

const register = async(req, res) => {
    const data = req.body
    const { firstName, lastName, email, password, gender} = req.body
    if(!Object.keys(data).length){
        res.status(400).json({message: 'Missing data'})
    }
    if(!firstName || !lastName || !email || !password || !gender){
        return res.status(400).json({
            message: 'All fields must be completed',
            firstName: 'string',
            lastName: 'string',
            email: 'example@gmail.com',
            password: 'string',
            gender: 'string'
        })
    }else {
            try {
                const user = await usersControllers.createUser(data)
                return res.status(201).json({
                    message: 'succes',
                    user
                })           
            } catch (err) {
                    return res.status(400).json(err)
            }
    }

}

const deleted = async(req, res) => {
    const { id } =  req.params
    try {
        const data = await usersControllers.deleteUser(id)
        if(data){
            return res.status(204).json()
        }
        return res.status(400).json({message: 'invalid id'})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const update = async(req, res) => {

    const { id } = req.params
    const data =  req.body

    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing Data'})
    }else if(
        data.firstName || 
        data.lastName ||
        data.email || 
        data.gender || 
        data.phone
    ){

        try {
            const response = await usersControllers.updateUser(data, id)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }

    }else {
        return res.status(400).json({
            message: 'At least one field must be filled',
            firstName: 'string',
            lastName: 'string',
            email: 'example@gmail.com',
            gender: 'string',
            phone: '+51 92319342'
        })
    }

}



const getMyUser = async(req, res) => {
    const { id } = req.user
    try {
        const response = await usersControllers.getUserById(id)
        // response, retorna null en el caso que no exista el usuario
        if(response){
            return res.status(200).json(response)
        }else {
            return res.status(404).json('invalid ID')
        }
        
    } catch (error) {
        return res.status(400).json(error)
    } 
}

const deleteMyUser = async(req, res) => {
    const { id } = req.user

        try {
            const response = await usersControllers.deleteUser(id)
                if(response){
                    return res.status(204).json()
                } else {
                    return res.status(400).json({message: 'Invalid ID'})
                }
        } catch (error) {
            return res.status(400).json(error)
        }
}


const updateMyUser = async(req, res) => {

    const { id } = req.user
    const data =  req.body

    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing Data'})
    }else if(
        data.firstName || 
        data.lastName ||
        data.email || 
        data.gender || 
        data.phone
    ){

        try {
            const response = await usersControllers.updateUser(data, id)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
        
    }else {
        return res.status(400).json({
            message: 'At least one field must be filled',
            firstName: 'string',
            lastName: 'string',
            email: 'example@gmail.com',
            gender: 'string',
            phone: '+51 92319342'
        })
    }

}


module.exports = {
    register,

    getAll,
    getById,
    deleted,
    update,

    getMyUser,
    deleteMyUser,
    updateMyUser
}