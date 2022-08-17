const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
//const { fileURLToPath } = require("url");
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

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

// RUTAS

/**
 * Mira a ver que aquí estas importando unas funciones desde un fichero que esta vacío 🤒
 */
const {
  getAllAsistentes,
  getAsistenteById,
  getAsistenteByName,
  createAsistente,
  updateAsistente,
  deleteAsistente,
} = require("./controllers/asistentesControllers");


const router = require("express").Router();

router.get("/", function (req, res) {
  try {
    getAllAsistentes;
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get("/:id", function (req, res) {
  try {
    getAsistenteById;
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get("/:nombre", function (req, res) {
  try {
    getAsistenteByName;
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.post("/", function (req, res) {
  try {
    createAsistente;
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.put("/:id", function (req, res) {
  try {
    updateAsistente;
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.delete("/:id", function (req, res) {
  try {
    deleteAsistente;
  } catch (error) {
    res.json({ message: error.message });
  }
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/concierto", router);

//UNE EL BACK CON EL FRONTEND
app.use(express.static(path.join(__dirname, "../frontend/build")));

/**
 * Cuando estamos en en el entorno de pruebas de react, el routing funciona bien
 * al escribir /lista en la barra de direcciones porque lo unico que esta tocando el routing es react-router.
 *
 * El problema viene, cuando pasamos la apliación a deployment. En este momento, las rutas de react-router solo funcionan
 * correctamente cuando viajamos usando una etiqueta de react router => <Link />. Si viajamos usando la barra de direcciones, el redireccionamiento
 * lo va a hacer node, por lo tanto, no encuentra la ruta lista. Sin embargo, con esta línea de aquí, todas las peticiones que se hagan que no
 * vayan a una ruta conocida nos va a redireccionar a index.html(nuestro frontend) y este si va a saber lo que hacer con esa ruta.
 */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

app.listen(8000, () => {
  console.log("Server up running in http://localhost:8000/");
});
module.exports = {
  db
};