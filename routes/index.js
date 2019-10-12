const express = require("express"),
  router = express.Router();

// Define the home route
router.get("/", (req, res) => {
  return res.render("index", { title: "Home" });
});

// Define the about route
router.get('/about', (req, res) => {
  return res.render("about", { title: "About" });
})

// Define the guitars route
router.get('/guitars', (req, res) => {
  return res.render("guitars", { title: "Guitars" });
})

module.exports = router;