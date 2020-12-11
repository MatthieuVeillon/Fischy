const getUsers = async () => {
  try {
    // const users = await User.find(query);
    return {
      1: {
        id: "1",
        username: "Robin Wieruch",
      },
      2: {
        id: "2",
        username: "Dave Davids",
      },
    };
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};

module.exports = {
  getUsers,
};
