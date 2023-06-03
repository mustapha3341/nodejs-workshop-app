const express = require("express");
const fs = require("fs");
const path = require("path");

const contactsRouter = express.Router();
const contactsData = fs.readFileSync(path.join(__dirname, "../contacts.json"), {
  encoding: "utf-8",
});

contactsRouter.get("/", (req, res) => {
  const contacts = JSON.parse(contactsData).contacts;
  res.render("contacts", { contacts });
});

contactsRouter.get("/json", (req, res) => {
  const contacts = JSON.parse(contactsData).contacts;
  res.json({ contacts });
});

module.exports = contactsRouter;
