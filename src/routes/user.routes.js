
const express = require("express");
const { crearUsuario, login } = require("../controllers/user.controllers");

const router = express.Router();


// ruta para crear un usuario --- POST  
router.post("/crear-usuario", crearUsuario );  // router escucha la petición post en la ruta /crear-usuario y ejecuta la función crearUsuario

// ruta para login de un usuario --- POST
router.post("/login", login);

// ruta para actualizar un usuario --- PUT
router.put("/actualizar-usuario/:id", (req, res) => {
    res.send("Lógica para actualizar un usuario");
});

//ruta par eliminar un usuario --- DELETE
router.delete("/eliminar-usuario/:id", (req, res) => {
    res.send("Lógica para eliminar un usuario");
});

// ruta para obtener lista de usuarios --- GET
router.get("/listar-usuarios", (req, res) => {
    res.send("Lógica para obtener lista de usuarios");
});

module.exports = router; // exportamos el router para poder utilizarlo en otros archivos