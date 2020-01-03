'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.string('name')
            table.increments()
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentsSchema
