const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Incident = sequelize.define("Incident", {
  type: {
    type: DataTypes.ENUM(
      "Accident",
      "Travaux",
      "Route fermée",
      "Embouteillage"
    ),
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM(
      "Signalé",
      "En cours",
      "Résolu"
    ),
    defaultValue: "Signalé",
  },

  latitude: {
    type: DataTypes.FLOAT,
  },

  longitude: {
    type: DataTypes.FLOAT,
  },
})

module.exports = Incident