require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  mySecret: process.env.MY_SECRET,
  port: process.env.PORT
};
