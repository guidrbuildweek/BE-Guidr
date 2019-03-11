
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', table => {
      table.increments();
      table.string("trip-name");
      table.string("trip-type").unique();
      table.string("location");
      table.date("duration-start");
      table.date("duration-end");
      table.string("priv-pro");
      table.date('date-posted');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
};
