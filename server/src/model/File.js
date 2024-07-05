// Defined a Sequelize model for storing the pre-signed URLs.
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const File = sequelize.define(
  "File",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "files", // your table name in RDS
    timestamps: true,
  }
);

module.exports = File;
