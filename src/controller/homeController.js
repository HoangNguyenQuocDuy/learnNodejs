import pool from "../configs/connectDB";

const promisePool = pool.promise();

const getHomePage = async (req, res) => {
  //logic
  const [user] = await promisePool.execute("SELECT * from users");

  return res.render("index.ejs", { dataUser: user });
};

const getDetailPage = async (req, res) => {
  let id = req.params.id;

  const [user] = await promisePool.execute(
    `SELECT * FROM users where id = ${id}`
  );

  return res.send(JSON.stringify(user));
};

const createNewUser = async (req, res) => {
  console.log(">>> check req: ", req.body);
  const { firstName, lastName, email, address } = req.body;
  await promisePool.execute(
    'INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, address]
  );

  return res.redirect('/')
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
};
