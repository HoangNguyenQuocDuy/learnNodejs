import pool from "../configs/connectDB";

const promisePool = pool.promise();

const getHomePage = async (req, res) => {
  //logic
  const [user] = await promisePool.query("SELECT * from users");

  return res.render("index.ejs", { dataUser: user });
};

const getDetailPage = async (req, res) => {
    let id = req.params.id;
    const [user] = await promisePool.query(`SELECT * FROM users where id = ${id}`)

    return res.send(JSON.stringify(user))
};

module.exports = {
  getHomePage,
  getDetailPage,
};
