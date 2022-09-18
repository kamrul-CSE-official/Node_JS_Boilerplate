const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./utils/dbConnection");
const usersRouters = require("./routers/v1/users.router");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Database connection
dbConnection();

//All routers
app.use("/user", usersRouters);

//Wrong router call
app.all("*", (req, res) => {
  res.send("No Router Found...");
});

app.use(errorHandler);

//Listening On
app.listen(port, () => {
  console.log(`This App Listeing On Port: ${port}`);
});

//Globale error handle
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
