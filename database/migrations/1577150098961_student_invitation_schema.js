'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentInvitationSchema extends Schema {
  up () {
    this.create('student_invitations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('student_invitations')
  }
}

module.exports = StudentInvitationSchema
