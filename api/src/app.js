import express from "express";
import cors from "cors";
import userRoutes from "./domains/user/userRoutes";
import { models } from "./database/models";

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

module.exports = app;
