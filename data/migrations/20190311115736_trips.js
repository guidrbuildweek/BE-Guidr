
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', table => {
      table.increments();
      table.string("trip-name");
      table.string("trip-type").unique();
      table.string("location");
      table.integer("duration-start");
      table.integer("duration-end");
      table.string("priv-pro");
      table.integer('date-posted');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
};
