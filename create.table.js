const database = require('./database')

const createTable = async () => {
    try{
        await database.schema.dropTableIfExists('car')

        await database.schema.createTable('car', carTable => {
            carTable.increments('id').primary()
            carTable.string('brand', 50).notNullable()
            carTable.string('model',50).notNullable()
            carTable.integer('year').notNullable()
            carTable.integer('price').notNullable()
        })
        console.log('car table careated!!')

        database.destroy()
    } catch(error){
        console.log(error)
        database.destroy()
    }
}

createTable()