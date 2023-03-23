import pool from "../configs/connectDB";

const promisePool = pool.promise();

const getALlUsers = async (req, res) => {
  const [user] = await promisePool.execute("SELECT * from users");

  return res.status(200).json({ user });
};

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, address } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(200).json("no params are require");
  }

  await promisePool.execute(
    "INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.status(200).json("CREATE USER - OK");
};

const updateUser = async (req, res) => {
  const { firstName, lastName, email, address, id } = req.body;

  if (!firstName || !lastName || !email || !address || !id) {
    return res.status(200).json("no params are require");
  }

  await promisePool.execute(
    "UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?",
    [firstName, lastName, email, address, id]
  );

  return res.status(200).json("UPDATE USER - OK");
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(200).json("no params are require");
  }

  await promisePool.execute("DELETE FROM users WHERE id = ?", [id]);

  return res.status(200).json("DELETE USER - OK");
};

module.exports = {
  getALlUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
