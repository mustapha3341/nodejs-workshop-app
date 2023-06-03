const express = require("express");
const appRouter = require("../routes-test");

const app = express();
const PORT = 3000;

app.use("/api/v1", appRouter);

app.listen(PORT, () => console.log("server is up and running..."));
