
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 1, tripName: 'Adventure in the Rockies', tripType:'Expedition', location:'Colorado', durationStart:'1990/12/12', durationEnd:'1991/01/12', privPro:'Professional', datePosted:'2019/03/11'},
        {id: 2, tripName: 'Adventure in the Himalayas', tripType:'10 Day Expedition', location:'Tibet', durationStart:'1999/10/11', durationEnd:'1999/10/21', privPro:'Private', datePosted:'2019/03/10'},
        {id: 3, tripName: 'Adventure in Pleistocene Park', tripType:'Guided Adventure', location:'Sakha Republic, Russia', durationStart:'2000/12/12', durationEnd:'2001/01/12', privPro:'Professional', datePosted:'2019/03/11'},
      ]);
    });
};
