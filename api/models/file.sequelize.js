const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("./sequelizeConnect");

const files = sequelize.define("files", {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    useruid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
files.sync();

module.exports = { files };