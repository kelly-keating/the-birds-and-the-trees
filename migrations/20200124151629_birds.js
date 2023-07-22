
exports.up = function(knex) {
    return knex.schema.createTable('birds', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('species')
        table.string('img_url')
        table.text('description')
        table.string('icon')
        table.string('alias')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('birds')
};
