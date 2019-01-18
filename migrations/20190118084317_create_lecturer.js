const tableName = "lecturers";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable(tableName, function(table) {
            table.uuid("id").notNullable().primary();
            table.string("username").unique().notNullable();
            table.string("password").notNullable();
            table.string("name");
            table.string("email").unique().notNullable();
            table.json("profile");
            table.string("photo");
            table.timestamps(true, true);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists(tableName)
    ]);
};
