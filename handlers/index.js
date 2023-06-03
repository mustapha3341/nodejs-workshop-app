const { getPostsHandler } = require("./post.handler");
const { getSongsHandler } = require("./songs.handler");

const { getTodosHandler } = require("./todos.handler");

module.exports = { getPostsHandler, getSongsHandler, getTodosHandler };
