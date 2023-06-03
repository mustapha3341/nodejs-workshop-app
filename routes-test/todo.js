const { Router } = require("express");
const todoRouter = Router();

todoRouter.post("/", (req, res, next) => {});
todoRouter.get("/", (req, res, next) => {});
todoRouter.delete("/", (req, res, next) => {});

module.exports = todoRouter;
