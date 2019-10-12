const express = require("express"),
  routes = require("./routes/index"),
  bodyParser = require("body-parser"),
  Sequelize = require('sequelize'),
  sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'postgres'
  }),
  PORT = 3000,
  app = express();

// Parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from /public
app.use(express.static(__dirname + "/public"));

// View engine setup
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Include routes
app.use("/", routes);

// Listen on port 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
