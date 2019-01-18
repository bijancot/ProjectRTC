const tableName = "subjects";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable(tableName, function(table) {
            table.uuid("id").notNullable().primary();
            table.string("subjectName").notNullable();
            table.string("description");
            table.timestamps(true, true);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists(tableName)
    ]);
};
