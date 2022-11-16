const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("./sequelizeConnect");

const users = sequelize.define("users", {
  uid: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
users.sync();

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
    allowNull: false,
  },
  fileid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey:true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
files.sync();

module.exports = { users, files };
