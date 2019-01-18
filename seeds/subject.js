const tableName = "subjects";
const md5 = require("md5");
const uuid = require("uuid").v4;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {id: uuid(), subjectName: 'Pemrograman Perangkat Bergerak', description: "PPB Android development"},
      ]);
    });
};
