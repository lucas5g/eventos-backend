'use strict'

const Database = use('Database')

class StudentController {
    /**
     * Show a list of all students.
     * GET students
     *
     */
	async index() {
		const students = Database.table('students')

		return students
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
		const student = await Database.table('students').where({ ra: params.ra})

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
