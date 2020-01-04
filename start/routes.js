'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => {
    return {api:'gerenciamento dos eventos escolares'}
}) 

Route.post('/authenticate', 'AuthController.authenticate')

Route.get('/authenticate', () =>{
    return {api:'authenticate'}
})

Route.group(() => {
    Route.resource('/users', 'UserController').apiOnly()
    Route.resource('/profiles', 'ProfileController').apiOnly()
    Route.resource('/students', 'StudentController').apiOnly()
    Route.resource('/invitations', 'InvitationController').apiOnly()
    Route.get('/studentInvitations/:filter', 'StudentInvitationController.filter')
    Route.get('/studentInvitations', 'StudentInvitationController.index')
    Route.post('/studentInvitations', 'StudentInvitationController.store')
    
    
    //Route.resource('/studentInvitations', 'StudentInvitationController').apiOnly()

}).middleware('auth')


