
const app = require('./src/app/app.js');
const dbConnection = require('./src/database/conexion.js');



app.listen(3000, () => {
  console.log('Server on port 3000');
});

dbConnection();