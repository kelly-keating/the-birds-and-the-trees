const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

function getAllType (type) {
    return db(type)
}

function getTypeById (type, id) {
    return db(type)
        .where('id', id)
        .first()
}

module.exports = {
    getAllType,
    getTypeById
}