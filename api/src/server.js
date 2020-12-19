import express from "express";
import cors from "cors";
import userRoutes from "./domains/user/userRoutes";
import { models } from "./database/models";

const config = require("./config/db.config");

const app = express();

// allow to parse the payload from post request both normal and html form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// expose models on context for all routes
app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 8000, () => {
  console.info("config", config);
  console.info("Server started!");
});
