const connection = require("../config/database");
const { getAllUsers } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", {listUsers: results }); // x <- y
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  console.log(">>> req.body: ", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>> email = ", email, "name = ", name, "city = ", city);

  // let{email, name, city} = req.body;
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?) `,[email, name, city]
  );

  console.log(">>> check results: ", results);
  res.send("created user success!");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
  postCreateUser,
  getCreatePage,
};
