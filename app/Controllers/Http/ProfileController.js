'use strict'

const Database = use('Database')
//const Profile = Database.table('profiles')
class ProfileController {
    /**
     * Show a list of all profiles.
     * GET profiles
     *
     */
    async index() {
        const profiles = await Database.table('profiles')

        return profiles

    }

    /**
     * Create/save a new profile.
     * POST profiles
     *
     */
    async store({ request, response }) {
    }

    /**
     * Display a single profile.
     * GET profiles/:id
     *
     */
    async show({ params }) {
        const profile = await Database.table('profiles')
            .where({ id: params.id })

        return profile
    }

    /**
     * Render a form to update an existing profile.
     * GET profiles/:id/edit
     *
     */
    async edit({ params, request, response, view }) {
    }

    /**
     * Update profile details.
     * PUT or PATCH profiles/:id
     *
     */
    async update({ params, request, response }) {
    }

    /**
     * Delete a profile with id.
     * DELETE profiles/:id
     *
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = ProfileController
