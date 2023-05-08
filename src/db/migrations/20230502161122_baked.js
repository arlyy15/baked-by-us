/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('bakedgoods', (table) => {
    table.increments('id');
    table.string('caption').notNullable();
    table.string('url').notNullable();
    table.string('price');
    table.timestamps(true, true);
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
});

/**`
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('bakedgoods');

