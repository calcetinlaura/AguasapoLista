const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
//const { fileURLToPath } = require("url");
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const {
  getAllAsistentes,
  getAsistenteById,
  getAsistenteByName,
  createAsistente,
  updateAsistente,
  deleteAsistente,
} = require("./controllers/asistentesControllers");

//CONEXIÓN BASE DE DATOS
const db = mysql.createConnection({
  host: "hl1132.dinaserver.com",
  user: "depen_aguasapo",
  password: "%4MQ1Ng1[$V2",
  database: "depen_aguasapo",
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Conectado a la base de datos");
});

const app = express();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.listen(8000, () => {
  console.log("Server up running in http://localhost:8000/");
});

app.get("/lista", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

/**
 * No te esta funcionando porque:
 * 1. En asistenteModel, tenias puesto que la base de datos es concierto, pero se llama "conciertos"
 * 2. Las funciones que tienes estas de get, primero que no tenían ningún return ni nada que hiciera que devolvieran algo, solo
 * tienen console.log
 * 3. Cuando javascript va leyendo las lineas de código, si una función no tiene lo parentesis "funcion()", no la va a ejecutar.
 * No hay que confundir una función cuando la ponemos para que se ejecute (llamarla) a cuando la pasamos como parametro a otra funcion,
 * que ahí lo que le pasamos es una referencia a la misma ===> function() !== funcion.
 * 4. Lo tienes montado de puta madre, pero te vas a tener que calentar un poco la cabeza para hacer funcionar las funciones estas de
 * getAsistentes y tal. Si tienes prisa, hazlo como he hecho yo aquí (aunque mi solución sea la facilona cutrona, pa salvar el día puede funcionar)
 */

app.get("/asistentes", function (req, res) {
  try {
    db.query("SELECT * FROM conciertos", (err, result) => {
      err ? response.send(err) : res.send(result);
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

//si no le pones el parentesis a las funciones, complicado que se ejecuten 🤠
app.get("/:id", function (req, res) {
  try {
    getAsistenteById();
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.get("/:nombre", function (req, res) {
  try {
    getAsistenteByName();
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.post("/", function (req, res) {
  try {
    createAsistente();
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.put("/:id", function (req, res) {
  try {
    updateAsistente();
  } catch (error) {
    res.json({ message: error.message });
  }
});
app.delete("/:id", function (req, res) {
  try {
    deleteAsistente();
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = {
  db,
};
