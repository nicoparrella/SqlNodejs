const database = require('./database')

const insertCars = async () => {
    try{
        const cars = [
            {brand: 'Volkswagen', model: 'Gol', year: 2015, price: 1000},
            {brand: 'Toyota', model: 'Corolla', year: 2010, price: 1200},
            {brand: 'Peugeot', model: '206', year: 2006, price: 800},
            {brand: 'Audi', model: 'a1', year: 2012, price: 2000}
        ]

        await database('car').insert(cars)
        console.log('Cars inserted!!')
        database.destroy()

        } catch(error){
        console.log(error)
        database.destroy()
    }
}

insertCars()
