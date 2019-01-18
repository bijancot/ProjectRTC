const tableName = "enrolments";

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable(tableName, function(table) {
            table.uuid("id").notNullable().primary();
            table.string("studentId").references('students.id');
            table.string("courseId").references('courses.id');
            table.date("dateEnrolment").notNullable();
            table.date("dateCompletion").notNullable();
            table.string("courseLink");
            table.enu("status", ["active", "inactive"]);
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
