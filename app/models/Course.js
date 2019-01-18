import { Subject } from './Subject';
import { Lecturer } from './Lecturer';

const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export class Course extends Model {
  static get tableName () {
    return 'courses';
  }

  static get relationMappings () {
    return {
      lecturer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Lecturer,
        join: {
          from: 'courses.lecturerId',
          to: 'lecturer.id'
        }
      },
      subject: {
        relation: Model.BelongsToOneRelation,
        modelClass: Subject,
        join: {
          from: 'courses.subjectId',
          to: 'subject.id'
        }
      }
    }
  }
}

module.exports = { Course };