const database = require('./database')

const selectCars = async () => {
    try {
        const carsFromDataBase = await database.from('car').select('*')
        carsFromDataBase.forEach(car => {
            console.log(`
                Marca: ${car.brand}
                Model: ${car.model}
                Year: ${car.year}
                Price: ${car.price}
            `)
        })
        database.destroy()
    } catch (error) {
        console.log(error)
        database.destroy()
    }
}

selectCars()