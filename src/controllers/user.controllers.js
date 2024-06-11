

// controlador para crear una usuario

const User = require("../models/user.model");

const crearUsuario = async (req, res) => {
// va a realizar una consulta a la base de datos para crear un usuario  ---> asincrona

const { name, lastName, email, password } = req.body;

// validar que los campos no estén vacíos

if(!name && !lastName && !email && !password ) {
  return res.status(400).json({
    message: "Todos los campos son obligatorios",
    status: 400,
    error: true
  })
}

// validar contraseña con expresión regular

// const validarPassword = "^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$";

// if(!password.match(validarPassword)) {
//   return res.status(400).json({
//     message: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
//     status: 400,
//     error: true
//   })
// }

try {

  // validación de email único
  const usuarioExistente = await User.findOne({ email: email})

  if(usuarioExistente) {
    return res.status(400).json({
      message: "El email ya está registrado",
      status: 400,
      error: true,
    })
  }

  const usuarioCreado = await User.create({
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  active: true
})

res.status(201).json({
  message: "Usuario creado con éxito",
  status: 201,
  error: false,
  data: {
    id: usuarioCreado._id,
    name: usuarioCreado.name,
    email: usuarioCreado.email  
  }
})

} catch (error) {
  res.status(500).json({
    message: "Error en el servidor al intentar crear el usuario",
    status: 500,
    error: true
  })
  console.log(error)
}

};






// controlador para hacer login de un usuario

const login = (req, res) => {
  res.send("Lógica para login de un usuario");
};

// controlador para actualizar un usuario


// controlador para eliminar un usuario


// controlador para obtener lista de usuarios


module.exports = {  crearUsuario, login  }; 
