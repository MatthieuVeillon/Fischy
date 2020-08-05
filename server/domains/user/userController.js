import userService from "./userService";

const getUsers = async (req, res) => {
  // Validate request parameters, queries using express-validator
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const users = await userService.getUsers({}, page, limit);
    return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

module.exports = {
  getUsers
};
