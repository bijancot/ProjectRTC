const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export class User extends Model {
  static get tableName () {
    return 'users'
  }
}

module.exports = { User };


