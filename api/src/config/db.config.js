module.exports = {
  dialect: "postgres",
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST || "postgres", // from docker compose service name
  port: process.env.DATABASE_PORT,
  logging: true,

  define: {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the followings
    freezeTableName: true,
    timestamps: false,
  },
};
