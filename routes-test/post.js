const { Router } = require("express");
const handlers = require("../handlers");
const postRouter = Router();

postRouter.get("/", handlers.getPostsHandler);

postRouter.post("/new", (req, res, next) => {});

module.exports = postRouter;
