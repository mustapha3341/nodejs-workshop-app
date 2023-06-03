const { Router } = require("express");
const todoRouter = require("../routes-test/todo");
const songRouter = require("../routes-test/song");
const postRouter = require("../routes-test/post");

const appRouter = Router();

appRouter.use("/posts", postRouter);
appRouter.use("/songs", songRouter);
appRouter.use("/todos", todoRouter);

module.exports = appRouter;