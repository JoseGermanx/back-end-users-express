
// mongoose
const mongoose = require("mongoose")


// crear el schema

const userSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    active: Boolean
})

// crear el modelo

const User = mongoose.model("User", userSchema)  // Modelo ****User**** hace match con colección ***users*** en la base de datos

module.exports = User