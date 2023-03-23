import pool from "../configs/connectDB";

const promisePool = pool.promise();

const getHomePage = async (req, res) => {
  //logic
  const [user] = await promisePool.execute("SELECT * from users");

  return res.render("index.ejs", { dataUser: user });
};

const getDetailPage = async (req, res) => {
  let id = req.params.id;

  const [user] = await promisePool.execute("SELECT * FROM users where id = ?", [
    id,
  ]);

  return res.send(JSON.stringify(user));
};

const createNewUser = async (req, res) => {
  console.log(">>> check req: ", req.body);
  const { firstName, lastName, email, address } = req.body;
  await promisePool.execute(
    "INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  let id = req.body.id;
  await promisePool.execute("DELETE FROM users WHERE id = ?", [id]);

  return res.redirect("/");
};

const getUser = async (req, res) => {
  const id = req.params.id;

  const [user] = await promisePool.execute("SELECT * FROM users where id = ?", [
    id,
  ]);

  return res.render("update.ejs", { dataUser: user[0] }); // x <- y
};

const updateUser = async (req, res) => {
  const { firstName, lastName, email, address, id } = req.body;

  await promisePool.execute(
    "UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?",
    [firstName, lastName, email, address, id]
  );

  return res.redirect('/');
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getUser,
  updateUser,
};
