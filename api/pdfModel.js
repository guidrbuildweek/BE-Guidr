const db = require('../data/dbConfig');

module.exports = {
    insert,
    update,
    remove,
    getById,
    getAll
}

async function insert(profile) {
    const [id] = await db('profile').insert(profile, 'id');

    return db('profile')
    .where({id})
    .first();
}