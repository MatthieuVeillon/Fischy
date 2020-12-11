import { Router } from "express";
import { models } from "../../database/models";

const router = Router();

router.get("/", async (req, res) => {
  console.log("models", models);
  const users = await models.User.findAll();

  res.status(200).json(users);
});

export default router;
