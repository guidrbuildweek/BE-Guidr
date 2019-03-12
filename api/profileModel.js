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

async function getAll() {
    const allProfiles = await db('profile')
    return allProfiles;

}

function remove(id) {
    return db('profile').where({id}).del();
}

function getById(id) {
    return db('profile').where({id}).first();
}

async function update(filter, props) {
    const updatedId = await db('profile')
    .where(filter)
    .first()
    .update(props, "id");
    const updated = await db('profile')
    .where({id: updatedId})
    first();
    
    if(!updatedId) return null;
    return updated
};