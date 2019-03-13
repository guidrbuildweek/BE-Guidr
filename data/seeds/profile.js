
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {id: 1, name: 'Susana', tagline:'Experienced trail guide in the pacific northwest, specializing in long intensive excursions.', age: 34, experience:'12'},
        {id: 2, name: 'Jodhi', tagline:'Professional rock climber.  Guiding free solo, dry tooling and bouldering adventures.', age: 27, experience:'5'},
        {id: 3, name: 'Robert', tagline:'Whitewater rafting instructor.', age: 45, experience:'20'}
      ]);
    });
};
