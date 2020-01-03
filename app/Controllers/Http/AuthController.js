'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class AuthController {

    async authenticate({ request, auth }){
        const { username, password} = request.all()
        
       // const token = { username, password}
        const token = await auth.attempt(username, password)
        const user = await Database.from('users').where({ username })
        token.name = user[0].name
        return token
    }
}

module.exports = AuthController
