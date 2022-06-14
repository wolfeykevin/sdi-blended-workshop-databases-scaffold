/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', table => {
    table.increments('id');
    table.string('title').notNullable();
    table.integer('pages');
    table.string('ISBN');
    table.string('published_date');
    table.integer('genre_id');
    table.integer('publisher_id');
    table.integer('format_id');
    table.string('cover_image');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('books');
};