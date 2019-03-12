exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments();
        users.string('name', 128).notNullable();
        users.string("username", 255).notNullable().unique();
        users.string('password', 255).notNullable();
        // users.integer('age');
        // users.string('email').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users');
  };
  