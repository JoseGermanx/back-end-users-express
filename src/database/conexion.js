
const mongoose = require("mongoose")

const dbConnection = async () => {

    try {
         // intenta hacer algo
         // esta conexión a la base de datos es asincrona   ------>>>>> se ejecuta en paralelo
    await mongoose.connect("mongodb://localhost:27017/backend-users")
    console.log("Database connected")

    } catch (error) {
        // si no puedes, capturar el error
        console.log(error)
    }
}

module.exports = dbConnection