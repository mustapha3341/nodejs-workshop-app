const express = require("express");
const path = require("path");
const handleBars = require("express-handlebars");
const appRouter = require("./routes");

const server = express();
const PORT = 4000;

server.engine(".hbs", handleBars.engine({ extname: ".hbs" }));
server.set("view engine", ".hbs");
server.set("views", path.join(__dirname, "views"));

server.use(express.static(path.resolve(__dirname, "/public")));

server.use(express.json());

server.use("/", appRouter);

server.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
