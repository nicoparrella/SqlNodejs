const knex = require('knex')
const config = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'coderhouse'
    },
    pool: { min: 0, max: 7 }
}

const configSQLite3 = {
    client: 'sqlite3',
    connection: {filename: './db/ecommerce.sqlite'},
    useNullAsDefault: true
}

const databaseConnection = knex(configSQLite3)
module.exports = databaseConnection