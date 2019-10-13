const express = require("express"),
  db = require("../models/index"),
  router = express.Router();

// Define the home route
router.get("/", (req, res, next) => {
  return res.render("index", { title: "Home" });
});

// Define the about route
router.get("/about", (req, res, next) => {
  return res.render("about", { title: "About" });
});

// Define the guitars route
router.get("/guitars", (req, res, next) => {
  res.render("guitars", { title: "Guitars" });
  db.Guitars.findAll({})
  .then(Guitars => res.json({
      error: false,
      data: Guitars
  }))
  .catch(error => res.json({
      error: true,
      data: [],
      error: error
  }));
});

// Create new entry
router.post("/guitars", (req, res, next) => {
  const {
    type,
    model,
    brand,
    price,
    necktype,
    bodytype,
    fretboard,
    fretcount
  } = req.body;
  db.Guitars.create({
    type: type,
    model: model,
    brand: brand,
    price: price,
    necktype: necktype,
    bodytype: bodytype,
    fretboard: fretboard,
    fretcount: fretcount
  })
  .then(Guitars => res.status(201).json({
    error: false,
    data: Guitars,
    message: "New entry created."
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});

// Update an entry
router.put("/guitars/:id", (req, res, next) => {
  const Guitars_id = req.params.id,
    {type, model, brand, price, necktype, bodytype, fretboard, fretcount} = req.body;

  db.Guitars.update({
    type: type,
    model: model,
    brand: brand,
    price: price,
    necktype: necktype,
    bodytype: bodytype,
    fretboard: fretboard,
    fretcount: fretcount
  }, {
    where: {
      id: Guitars_id
    }
  })
  .then(Guitars => res.json({
    error: false,
    message: "Guitars has been updated."
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

// Delete an entry
router.delete("/guitars/:id", (req, res, next) => {
  const Guitars_id = req.params.id;

  db.Guitars.destroy({ where: {
    id: Guitars_id
  }})
  .then(status => res.json({
    error: false,
    message: "Entry removed."
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

module.exports = router;