const db = require("./../app");
const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  /**
   * LA TABLA DE LA BASE DE DATOS SE LLAMABA CONCIERTOS, NO CONCIERTO¡¡¡¡¡¡¡ 😂
   */
  const asistenteModel = db.define("conciertos", {
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
    asistencia: { type: DataTypes.STRING },
  });
  asistenteModel
    .findAll({ attributes: ["nombre"] })
    .then((concierto) => {
      const resultados = JSON.stringify(concierto);
      return resultados;
    })
    .catch((error) => {
      console.log("ERRORCITO");
      console.log(error);
    });

  return asistenteModel;
};
