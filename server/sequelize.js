import { Sequelize } from "sequelize";
import user from "./domains/user/userModel";
import message from "./domains/messages/model";
require("dotenv").config();
import dbconfig from "./config/db.config.js";

console.log("dbconfig", dbconfig.development);

const sequelize = new Sequelize(dbconfig.development);

const models = {
  User: user(sequelize, Sequelize.DataTypes),
  Message: message(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

// const models = sequelize.models;

export { sequelize };
export default models;
