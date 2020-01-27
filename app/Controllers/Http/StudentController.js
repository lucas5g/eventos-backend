'use strict'

const Database = use('Database')

class StudentController {
  /**
   * Show a list of all students.
   * GET students
   *
   */
  async index({ params  }) {


    const si = await Database
      .select('si.created_at')
      .select('s.name', 's.ra', 's.father', 's.mother')
      .select('i.id', 'i.name as invitation')
      .from('students_invitations as si')
      .rightJoin('students as s', 's.ra', 'si.ra')
      .leftJoin('invitations as i', 'i.id', 'si.invitation_id')
      .orderBy('s.name', 'asc')
      .limit(10)


    return si
  }

  async search({ params }) {
    //todos alunos com e sem convites
    
    let { search } = params

    search = decodeURI(search)

    const si = await Database
      .select('si.created_at')
      .select('s.name', 's.ra', 's.father', 's.mother')
      .select('i.id', 'i.name as invitation')
      .from('students_invitations as si')
      .rightJoin('students as s', 's.ra', 'si.ra')
      .leftJoin('invitations as i', 'i.id', 'si.invitation_id')
      .whereRaw(`s.name LIKE '%${search}%'`)
      .orderBy('s.name', 'asc')
      .limit(10)
      .on('query', console.log)
    /**/

    return si

  }

  /**
   * Create/save a new student.
   * POST students
   */
  async store({ request, response }) {
  }

  /**
   * Display a single student.
   * GET students/:id
   *
     */
  async show({ params }) {
    const student = await Database.table('students').where({ ra: params.ra })

    return student
  }

  /**
   * Update student details.
   * PUT or PATCH students/:id
   *
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a student with id.
   * DELETE students/:id
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = StudentController
