'use strict'

const Database = use('Database')

class InvitationController {
	/**
	 * Show a list of all invitations.
	 * GET invitations
	 *
	 */
	async index() {
		const invitations  = Database.table('invitations')

		return invitations
	}
	/**
	 * Create/save a new invitation.
	 * POST invitations
	 *
	 */
	async store({ request, response }) {


	}

	/**
	 * Display a single invitation.
	 * GET invitations/:id
	 *
	 */
	async show({ params }) {
		const  invitation = await Database.table('invitations').where({ id: params.id})

		return invitation

	}
	/**
	 * Update invitation details.
	 * PUT or PATCH invitations/:id
	 *
	 */
	async update({ params, request, response }) {
		const data = request.only(['name', 'status'])

		if(!data.name){
			return {error: 'data incomplete'}
		}

		const affectedRows = await Database.table('invitations')	
			.where({ id:params.id}).update(data)
		
		if(affectedRows < 1){
			return {error: "don't update"}
		}
		const invitation = await Database.table('invitations').where({ id:params.id })

		return invitation
	}

	/**
	 * Delete a invitation with id.
	 * DELETE invitations/:id
	 *
	 */
	async destroy({ params, request, response }) {
	}
}

module.exports = InvitationController
