import { Sequelize } from "sequelize";
import user from "./domains/user/userModel";
import message from "./domains/messages/model";
require("dotenv").config();

console.log("dbname", process.env.DATABASE);

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
  }
);

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
