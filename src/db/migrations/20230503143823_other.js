/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('other', (table) => {
    table.increments('id');
    table.string('comment').notNullable();
    table.string('rating');
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('other');
