const tableName = "students";
const md5 = require("md5");
const uuid = require("uuid").v4;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {id: uuid(), username: 'asrul', password: md5("asrul123"), email: "asrulsibaoel@gmail.com",},
      ]);
    });
};
