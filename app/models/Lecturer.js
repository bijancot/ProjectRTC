const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export class Lecturer extends Model {
  static get tableName () {
    return 'lecturers'
  }

}

module.exports = { Lecturer };