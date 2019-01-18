import { Student } from './Student';
import { Course } from './Course';

const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

export class Enrolment extends Model {
  static get tableName () {
    return 'enrolments'
  }

  static get relationMappings () {
    return {
      student: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'enrolments.studentId',
          to: 'student.id'
        }
      },
      course: {
        relation: Model.BelongsToOneRelation,
        modelClass: Course,
        join: {
          from: 'enrolments.courseId',
          to: 'course.id'
        }
      }
    }
  }
}

module.exports = { Enrolment };