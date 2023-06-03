const express = require("express");

const loginRouter = require("./login");
const contactsRouter = require("./contacts");
const registerRouter = require("./resgister");
const homeRouter = require("./home");

const appRouter = express.Router();

appRouter.use("/login", loginRouter);
appRouter.use("/register", registerRouter);
appRouter.use("/contacts", contactsRouter);
appRouter.use("/", homeRouter);

module.exports = appRouter;
