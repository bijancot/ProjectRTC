const tableName = "lecturers";
const md5 = require("md5");
const uuid = require("uuid").v4;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {id: uuid(), username: 'subari', password: md5("subari123"), email: "subari@stiki.ac.id",},
      ]);
    });
};
