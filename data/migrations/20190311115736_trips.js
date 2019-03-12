
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', table => {
      table.increments();
      table.string("tripName");
      table.string("tripType");
      table.string("location");
      table.date("durationStart");
      table.date("durationEnd");
      table.string("privPro");
      table.date('datePosted');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
};
