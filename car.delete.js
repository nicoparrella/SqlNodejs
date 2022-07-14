const database = require('./database')

const deleteCars = async () => {
    try{
        // aca elimino toda la tabla
        // await database.from('car').del()

        // elimino el auto que sea id 1
        // await database.from('car').where('id', '=', 1).del

        // Aca me elimina el auto que sea igual al modelo o a lo que quiera
        const carsFromDataBase = await database.from('car').select('*')
        for(const car of carsFromDataBase){
            if (car.model === 'Gol' && car.brand === 'Volkswagen'){
                await database.from('car').where('id', '=', car.id).del()
            }
        }

        console.log('car deleted!')

        database.destroy()
    } catch(error){
        console.log(error)
        database.destroy()
    }
}

deleteCars()