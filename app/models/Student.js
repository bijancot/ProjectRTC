const Knex = require('knex')
const connection = require('../../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Student extends Model {
  static get tableName () {
    return 'students'
  }
}

module.exports = { Student };


