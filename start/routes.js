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
Route.get('/teste/:id', 'AuthController.show')


Route.get('/authenticate', () =>{
    return {api:'authenticate'}
})

Route.group(() => {
    Route.resource('/users', 'UserController').apiOnly()
    Route.resource('/profiles', 'ProfileController').apiOnly()
    //Route.resource('/students', 'StudentController').apiOnly()
    Route.resource('/invitations', 'InvitationController').apiOnly()
    Route.get('/students', 'StudentController.index')
    Route.get('/students/:ra', 'StudentController.show')
    Route.get('/students/search/:search', 'StudentController.search')
    //Route.get('/students/:ra', '')
    //Route.get('/studentInvitations/:filter', 'StudentInvitationController.filter')
    //Route.get('/studentInvitations', 'StudentInvitationController.index')
    Route.post('/studentInvitations', 'StudentInvitationController.store')
    
    //create new route    
    
    //Route.resource('/studentInvitations', 'StudentInvitationController').apiOnly()

}).middleware('auth')


