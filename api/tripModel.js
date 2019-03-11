const db = require('../data/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getById,
    getAll
}

async function insert(trip) {
    const [id] = await db('trips').insert(trip, 'id');

    return db('trips')
    .where({id})
    .first();
}

async function remove(id) {
    return db('trips')
    .where({id}).delete();
}