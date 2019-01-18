const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export class Subject extends Model {
  static get tableName () {
    return 'subjects'
  }
}

module.exports = { Subject };

