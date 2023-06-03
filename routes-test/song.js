const { Router } = require("express");
const handlers = require("../handlers");
const songRouter = Router();

songRouter.get("/", handlers.getSongsHandler);

songRouter.get("/:title", (req, res, next) => {});

songRouter.post("/", (req, res, next) => {});

module.exports = songRouter;
