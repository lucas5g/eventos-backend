'use strict'

const Database = use('Database')
const User = use('App/Models/User')
const Hash = use('Hash')


class UserController {
    async index(){
        const users = await Database
            .select('u.id', 'u.username', 'u.email', 'p.name as profile')
            .table('users as u')
            .innerJoin('profiles as p', 'u.profile_id', 'p.id')

        return  users
    }


    async store({ request }){
        const data = request.only(['name', 'email', 'username', 'password', 'profile_id'])
        
        if(!data.name || !data.email || !data.username || !data.password || !data.profile_id){
            return {error: 'data incomplete'}
        }

        
        //verificar se ja existe usuario com este username
        let user = await Database.from('users').where({username: data.username})

        if(user.length > 0){
            return {error: 'Já existe este usuário'};
        }
        
        //store user

        data.password = await Hash.make(data.password)
        const id = await Database.from('users').insert(data)
        user = await Database.from('users').where({id:id})


        /** */
        return user
    }

    async show({ params }){
        const user = await Database
            .select('u.id', 'u.username', 'u.email')
            .select('p.name as profile')
            .from('users as u')
            .innerJoin('profiles as p', 'u.profile_id', 'p.id')
            .where({'u.id': params.id})

        return user

    }

    async update({ params, request}){
      
        const data = request.all()

        if(!data.name || !data.email || !data.username || !data.password || !data.profile_id){
            return {error: 'data incomplete'}
        }

        data.password = await Hash.make(data.password)

        const affectedRows = await Database.from('users')
            .where({id: params.id})
            .update(data)
       
        const user = await Database.from('users').where({id: params.id})
        user[0].password = undefined
        return user
    }
}

module.exports = UserController
