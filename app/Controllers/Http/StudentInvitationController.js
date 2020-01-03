'use strict'

const Database = use('Database')

//const si = stutent invitation


class StudentInvitationController {
    /**
     * Show a list of all studentinvitations.
     * GET studentinvitations
     */
    /**/

    async index() {
        //todos alunos com e sem convites
        const si = await Database
            .select('si.created_at')
            .select('s.name', 's.ra')
            .select('i.id', 'i.name as invitation')
            .from('studentInvitations as si')
            .rightJoin('students as s','s.ra', 'si.ra')
            .leftJoin('invitations as i', 'i.id', 'si.invitation_id')
            .orderBy('s.name', 'asc')
            .limit(10)

        
        return si
    }

    /**
     * Create/save a new studentinvitation.
     * POST studentinvitations
     */
    async store({ request }) {
        const data = request.only(['ra', 'invitation_id'])

        //verifica se exits o estudante

        const student = await Database.from('students').where({ra:data.ra})
        if(student.length === 0){
            return {'error': "don't exist"};
        } 

        //verifica se exist o convite

        const invitation = await Database.from('invitations').where({id: data.invitation_id})
        if(invitation.length === 0){
            return {'error':"invitation does not exist"}
        } 

        //verifica se o aluno ja tem esse convite

        let si = await Database.from('studentInvitations')
            .where({invitation_id: data.invitation_id, ra: data.ra})
            
        if(si.length > 0){
            si = await Database.from('studentInvitations')
                .where({invitation_id: data.invitation_id, ra: data.ra}).del()
            return {si, msg:'delete'}
        }

        data.user_id = 1
        
        const si_id = await Database.from('studentInvitations').insert(data)

        if(si_id < 0) return {error: 'does not posible insert in the database'}

        si = await Database.from('studentInvitations').where({id:si_id})
        /** */
        return si
    }
    /**
     * Display a single studentinvitation.
     * GET studentinvitations/:id
     */
    async show() {
     
    }

    /**
     * Update studentinvitation details.
     * PUT or PATCH studentinvitations/:id
     */
    async update({ params, request, response }) {
    }

    /**
     * Delete a studentinvitation with id.
     * DELETE studentinvitations/:id
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = StudentInvitationController
