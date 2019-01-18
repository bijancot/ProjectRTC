const tableName = "courses";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable(tableName, function(table) {
            table.uuid("id").notNullable().primary();
            table.string("lecturerId").references('lecturers.id');
            table.string("subjectId").references('subjects.id');
            table.string("courseName").notNullable();
            table.string("courseDescription");
            table.timestamps(true, true);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists(tableName)
    ]);
};
