

// controlador para crear una usuario

const User = require("../models/user.model");

const crearUsuario = async (req, res) => {
// va a realizar una consulta a la base de datos para crear un usuario  ---> asincrona

await User.create({
  name: "Alberto",
  lastName: "Arias",
  email: "alberto@arias.com",
  password: "123123",
  active: true
})

res.send("Usuario creado");

};



// controlador para hacer login de un usuario

const login = (req, res) => {
  res.send("Lógica para login de un usuario");
};

// controlador para actualizar un usuario


// controlador para eliminar un usuario


// controlador para obtener lista de usuarios


module.exports = {  crearUsuario, login  }; 
