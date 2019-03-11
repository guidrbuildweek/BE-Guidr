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

async function getAll() {
    const allTrips = await db('trips')
    return allTrips;

}

function remove(id) {
    return db('trips').where({id}).del();
}

function getById(id) {
    return db('trips').where({id}).first();
}

async function update(filter, props) {
    const updatedId = await db('trips')
    .where(filter)
    .first()
    .update(props, "id");
    const updated = await db('trips')
    .where({id:updatedId})
    first();
    
    if(!updatedId) return null;
    return updated
};