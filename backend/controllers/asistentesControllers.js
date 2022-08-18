const { response } = require("express");
const { db } = require("../app");
const asistenteModel = require("./../models/asistenteModel");

const getAllAsistentes = (req, res) => {
  try {
    db.query("SELECT * FROM conciertos", (err, result) => {
      err ? response.send(err) : res.send(result);
    });
    res.json(asistentes);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getAsistenteById = async (req, res) => {
  try {
    const asistente = await asistenteModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(asistente[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getAsistenteByName = async (req, res) => {
  try {
    const asistentes = await asistenteModel.findAll({
      where: {
        nombre: req.params.nombre,
      },
    });
    res.json(asistentes);
    console.log("oveja");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createAsistente = async (req, res) => {
  try {
    await asistenteModel.create(req.body);
    res.json({
      message: "Asistente creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateAsistente = async (req, res) => {
  try {
    await asistenteModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Asistente actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteAsistente = async (req, res) => {
  try {
    await asistenteModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Asistente Borrado",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
module.exports = {
  getAllAsistentes,
  getAsistenteById,
  getAsistenteByName,
  createAsistente,
  updateAsistente,
  deleteAsistente,
};
