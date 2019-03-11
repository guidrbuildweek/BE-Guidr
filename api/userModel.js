const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById(id) {
    return db('users')
    .where({id})
    .first();
}

function findBy(filter) {
    return db('users').where(filter).first();
  }

function find() {
    return db('users').select('id','name', 'username', 'password');
}