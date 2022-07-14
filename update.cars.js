const database = require('./database')

const updateCar = async () => {
    try {
        const carsFromDatabase = await database.from('car').select('price','id')

        await Promise.all(carsFromDatabase.map(async car =>{
            await database.from('car').where('id', '=', car.id).update({ price: car.price * 2,})
        }))

        // await database.from('car').where('id', '=', '1').update({ price: 1000, year: 2016 })
        // await database.from('car').where('id', '=', '2').update({ price: 1000, year: 2016 })
        console.log('Car update')
        database.destroy()
    } catch (error) {
        console.log(error)
        database.destroy()
    }
}

updateCar()