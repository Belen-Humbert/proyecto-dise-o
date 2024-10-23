const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para manejar el registro y guardar en usuarios.txt
app.post('/register', (req, res) => {
  const { firstName, lastName, email, city } = req.body;

  // Crear una línea de texto con los datos recibidos
  const newUser = `Nombre: ${firstName}, Apellido: ${lastName}, Email: ${email}, Ciudad: ${city}\n`;

  // Definir la ruta del archivo usuarios.txt
  const filePath = path.join(__dirname, 'usuarios.txt');

  // Escribir la información en el archivo usuarios.txt
  fs.appendFile(filePath, newUser, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al guardar el usuario' });
    }
    return res.status(200).json({ message: 'Usuario registrado exitosamente' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
