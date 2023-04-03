// Middleware para proteger rutas
const { getUserById } = require('../users/users.controllers');


// 1- Revisar si existe un token
// 2- Verificar si el token le pertenece a un usuario calido
// 3- Modificar el req y agregar req.user con la informacion desencriptada del token

const JwtStrategy = require('passport-jwt').Strategy;
// Passport maneja las estrategias para las diferentes authenticaciones
const ExtractJwt = require('passport-jwt').ExtractJwt;
// Extrae los header de la peticion


// Exportando funcion anonima
module.exports = (passport) => {

    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: 'e-commerce_dev'
    }

    passport.use(
        new JwtStrategy(options, async(decoded, done) => {
            // done(error, decoded)

            try {
                const user = await getUserById(decoded.id)
                if(user){
                    console.log('decoded JWT', decoded)
                    return done(null, decoded)
                }
                return done(null, false)
            } catch (error) {
                return done(error, false)
            }

        })
    )

}