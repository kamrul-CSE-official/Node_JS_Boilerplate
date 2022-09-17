const database = require("../user.data.json");

module.exports.getrandom = (req, res) => {
  let randomNum = Math.random() * 5;
  let roundNum = Math.round(randomNum);
  let randomUser = database[roundNum];
  console.log("Get random user id: ", randomUser.id);
  res.send(randomUser);
};

module.exports.getAllUsers = (req, res) => {
  console.log("Find All Data..");
  res.send(database);
};

module.exports.saveAUser = (req, res) => {
  console.log(req.body);
  database.push(req.body);
  res.send(database);
};
