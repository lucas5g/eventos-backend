'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.string('ra', 15).notNullable().unique()
            table.string('name', 100).notNullable()
            table.string('father', 150)
            table.string('mother', 150)
            table.increments()
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentsSchema
