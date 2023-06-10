const { Router } = require("express");
const {
  contactHandler,
  createContactHandler,
  updateContactHandler,
} = require("../handlers");

const contactsRouter = Router();

contactsRouter.get("/", contactHandler);
contactsRouter.post("/new", createContactHandler);
contactsRouter.patch("/:contactFirstName/update", updateContactHandler);

module.exports = contactsRouter;
