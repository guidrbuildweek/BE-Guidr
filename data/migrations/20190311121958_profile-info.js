
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', profile => {
      profile.increments();
      profile.string('name');
      profile.string('tagline', 500);
      profile.integer('age');
      profile.integer('experience');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profile');
};
