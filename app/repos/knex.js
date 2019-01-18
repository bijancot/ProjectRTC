module.exports = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'qwerty123!@#',
      database : 'lectureme'
    },
    pool:{
        min: "2",
        max: "10"
    },
    migrations: {
        tableName: "migrations"
    }
  });