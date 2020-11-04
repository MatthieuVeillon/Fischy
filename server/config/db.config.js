module.exports = {
  development: {
    dialect: "postgres",
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: "postgresql", //from docker compose service name
    port: process.env.DATABASE_PORT,
    define: {
      freezeTableName: true,
      underscored: true,
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
