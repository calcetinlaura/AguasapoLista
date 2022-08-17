const db = require("./../app");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const asistenteModel = db.define('concierto', {
    grupo: { type: DataTypes.STRING },
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    entradasAdultos: { type: DataTypes.DOUBLE },
    entradasPubertos: { type: DataTypes.DOUBLE },
    entradasPeques: { type: DataTypes.DOUBLE },
    comentario: { type: DataTypes.STRING },
    pago: { type: DataTypes.STRING },
    pagoMetodo: { type: DataTypes.STRING },
    pagoPersona: { type: DataTypes.STRING },
    asistencia: { type: DataTypes.STRING }
  });
  asistenteModel.findAll({ attributes: ['nombre'] })
    .then(concierto => {
      const resultados = JSON.stringify(concierto)
      console.log(resultados)
    })
    .catch(error => {
      console.log("ERRORCITO")
      console.log(error)
    })

  return asistenteModel
}


