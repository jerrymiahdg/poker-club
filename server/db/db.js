const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../server/db/db.db",
});

module.exports = sequelize;
