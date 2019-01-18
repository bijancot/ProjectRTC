
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable("users", function(table) {
            table.uuid("id").notNullable().primary();
            table.string("username").unique().notNullable();
            table.string("password").notNullable();
            table.string("type");
            table.string("email").unique().notNullable();
            table.json("profile");
            table.string("photo");
            table.string("roleId");
            table.timestamps(true, true);
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("users")
    ]);
};
