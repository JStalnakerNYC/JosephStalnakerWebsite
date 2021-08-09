const Sequelize = require("sequelize");
const db = require("../db");

const Casting = db.define("casting", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  medium: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Casting;
