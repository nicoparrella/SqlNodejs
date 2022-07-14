const database = require('./database')

const selectCarsWhere = async () => {
    try {
        const carsFromDataBase = await database.from('car').select('*').where('year', '<=', 2010).orderBy('price', 'asc')
        carsFromDataBase.forEach(car => {
            console.log(`
                Marca: ${car.brand}
                Model: ${car.model}
                Year: ${car.year}
                Price: $${car.price}
            `)
        })
        database.destroy()
    } catch (error) {
        console.log(error)
        database.destroy()
    }
}

selectCarsWhere()