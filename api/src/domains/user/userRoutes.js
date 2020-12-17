import { Router } from "express";
import { models } from "../../database/models";

const router = Router();

router.get("/", async (req, res) => {
  try {
    console.log("User", models.User);

    const users = await models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
});

export default router;
