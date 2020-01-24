'use strict'

const User = use('App/Models/User')
//const Database = use('Database')
const Hash = use('Hash')


class AuthController {

    async authenticate({ request, auth }){
        const { username, password} = request.all()
        
       // const token = { username, password}
        const token = await auth.attempt(username, password)
               
        token.username =  username
        return token
    }

    async show({ params }){
        const { id } = params
        let password = await Hash.make('Sic7c8sic')

        const user = await User.query().where('id', id)
            .update({password:password})



        return user
    }
}

module.exports = AuthController
