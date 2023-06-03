const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("home", { title: "Mustapha" });
});

module.exports = homeRouter;
